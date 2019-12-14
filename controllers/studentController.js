const validator = require('validator');
const Student = require('../models/studentSchema');

const auth = require('../utils/auth');

module.exports = {
  registerStudent: (req, res, next) => {
    const { username, email, password } = req.body;
    console.log(req.body, 'in controller');
    if (!email || !password || !username) {
      return res.json('Email and password are must.');
    }
    if (!validator.isEmail(email)) {
      return res.json('Invalid email');
    }
    if (password.length < 6) {
      return res.status(401).json('Password should be atleast 6 characters.');
    }
    Student.create(req.body, (err, createdStudent) => {
      if (err) return next(err);
      console.log(createdStudent, 'inside controller');
      return res.status(200).json({ Student: createdStudent });
    });
  },

  loginStudent: (req, res, next) => {
    const { password, email } = req.body;
    if (!email || !password) {
      return res.status(401).json({ error: 'INVALID USER' });
    }
    Student.findOne({ email }, (err, student) => {
      if (err) return next(err);
      if (!student) return res.json({ student: 'student Not Found' });
      if (!student.confirmPassword(password)) {
        return res.json({ error: 'Password Is Not Correct' });
      }
      const token = auth.generateToken(email);
      return res.status(200).json({ student, token });
    });
  },

  findStudent: (req, res) => {
    Student.findById(req.params.userId)
      .then(student => {
        if (!student) {
          return res.status(404).send({
            message: 'Student not found',
          });
        }
        res.json({ student });
      })
      .catch(err => {
        if (err.kind === 'ObjectId') {
          return res.status(404).send({
            message: 'Student not found',
          });
        }
        return res.status(500).json({
          message: 'Error retrieving student',
        });
      });
  },

  studentList: (req, res, next) => {
    Student.find({}, (err, students) => {
      if (err) return next(err);
      return res.status(200).json({ students });
    });
  },
};
