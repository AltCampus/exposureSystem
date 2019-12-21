const validator = require("validator");
const Student = require("../models/studentSchema");

const auth = require("../utils/auth");

module.exports = {
  registerStudent: (req, res, next) => {
    const { username, email, password } = req.body;
    if (!email || !password || !username) {
      return res.json("Email and password are must.");
    }
    if (!validator.isEmail(email)) {
      return res.json("Invalid email");
    }
    if (password.length < 6) {
      return res.status(401).json("Password should be atleast 6 characters.");
    }
    Student.create(req.body, (err, createdStudent) => {
      if (err) return next(err);
      var {
        username,
        email,
        isInCampus,
        isActive,
        isApproved,
        sentContent,
        points
      } = createdStudent;
      var registerStudents = {
        username: username,
        email: email,
        isApproved: isApproved,
        isActive: isActive,
        sentContent: sentContent,
        points: points
      };
      return res.status(200).json({ student: registerStudents });
    });
  },

  loginStudent: (req, res, next) => {
    const { password, email } = req.body;
    if (!email || !password) {
      return res.status(401).json({ error: "INVALID STUDENT" });
    }
    Student.findOne({ email }, (err, student) => {
      if (err) return next(err);
      if (!student) return res.json({ student: "student Not Found" });
      if (!student.confirmPassword(password)) {
        return res.json({ error: "Password Is Not Correct" });
      }
      if (student.isApproved === false)
        return res.json({ student, error: "Not verified" });

      const token = auth.generateToken(email);
      var {
        username,
        email,
        isInCampus,
        isActive,
        isApproved,
        sentContent,
        points
      } = student;
      var loginStudent = {
        username: username,
        isInCampus: isInCampus,
        isActive: isActive,
        isApproved: isApproved,
        sentContent: sentContent,
        points: points
      };
      console.log(loginStudent, "in the login student");
      return res.status(200).json({ loginStudent, token });
    });
  },

  findStudent: (req, res) => {
    Student.findById(req.params.userId)
      // .select('+password')
      .then(student => {
        if (!student) {
          return res.status(404).send({
            message: "Student not found"
          });
          student;
        }
        res.json({ student });
      })
      .catch(err => {
        if (err.kind === "ObjectId") {
          return res.status(404).send({
            message: "Student not found"
          });
        }
        return res.status(500).json({
          message: "Error retrieving student"
        });
      });
  },

  studentList: (req, res, next) => {
    Student.find({}, (err, students) => {
      if (err) return next(err);
      return res.status(200).json({ students });
    });
  },

  updateStudentPoints: (req, res, next) => {
    let { userid, contentid } = req.body;
    let sentContent = [];
    let points =
      new Date(req.body.createdAt).valueOf() + 172800 * 1000 > Date.now()
        ? 1
        : -1;
    Student.findById(userid).then(student => {
      sentContent.push(...student.sentContent, contentid);
    });
    Student.findByIdAndUpdate(
      id,
      {
        sentContent,
        points
      },
      (err, updatedStudent) => {
        err ? res.json(err) : res.json(updatedStudent);
      }
    );
  },

  updateStudent: (req, res, next) => {
    const id = req.body.id;
    Student.findByIdAndUpdate(id, req.body, (err, student) => {
      if (err) return next(err);
      return res.status.json({ student });
    });
  }
};
