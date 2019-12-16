const validator = require("validator");
const Student = require("../models/studentSchema");

const auth = require("../utils/auth");

module.exports = {
  registerStudent: (req, res, next) => {
    const { username, email, password } = req.body;
    console.log(req.body, "in controller");
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
      console.log(createdStudent, "inside controller");
      return res.status(200).json({ Student: createdStudent });
    });
  },

  loginStudent: (req, res, next) => {
    const { password, email } = req.body;
    if (!email || !password) {
      return res.status(401).json({ error: "INVALID USER" });
    }
    Student.findOne({ email }, (err, student) => {
      console.log(student, "aaaa");
      if (err) return next(err);
      if (!student) return res.json({ student: "student Not Found" });
      if (!student.confirmPassword(password)) {
        return res.json({ error: "Password Is Not Correct" });
      }
      if (student.isApproved === false)
        return res.json({ student, error: "Not verified" });

      const token = auth.generateToken(email);
      return res.status(200).json({ student, token });
    });
  },

  findStudent: (req, res) => {
    Student.findById(req.params.userId)
      .then(student => {
        if (!student) {
          return res.status(404).send({
            message: "Student not found"
          });
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

  //   updateStudent: (req, res, next) => {
  //     let { username, email, id } = req.body;
  //     let sentContent = [];
  //     Student.findById(req.body.id).then(student => {
  //       sentContent.push(...student.sentContent, req.body.sentContent);
  //     });
  //     Student.findByIdAndUpdate(
  //       id,
  //       {
  //         username,
  //         email,
  //         sentContent,
  //       },
  //       (err, updatedStudent) => {
  //         err ? res.json(err) : res.json(updatedStudent);
  //       },
  //     );
  //   },
  updateStudent: (req, res, next) => {
    const id = req.body.id;
    Student.findByIdAndUpdate(id, req.body, (err, student) => {
      if (err) return next(err);
      return res.status.json({ student });
    });
  }
};
