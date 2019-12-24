const auth = require('../utils/auth');
const Student = require('../models/studentSchema');
const Admin = require('../models/adminSchema');

module.exports = {
  adminLogin: (req, res, next) => {
    const { email, password } = req.body;
    if (email.length < 10 || password.length < 6) {
      return res.status(401).json({ error: 'INVALID PASSWORD' });
    }
    Admin.findOne({ email }, (err, admin) => {
      if (err) return next(err);
      if (!admin) return res.status(401).json({ error: 'NOT ADMIN' });
      if (!admin.confirmPassword(password)) {
        return res.json({ error: 'Not Admin' });
      }
      const token = auth.generateToken(email);
      return res.status(200).json({ admin, token });
    });
  },

  approveStudent: (req, res, next) => {
    req.body.isApproved = true;
    const { id } = req.params;
    Student.findByIdAndUpdate(id, req.body, { new: true }, (error, student) => {
      if (error) next(error);
      return res.status(200).json({ student });
    });
  },

  removeStudent: (req, res, next) => {
    const { id } = req.params;
    Student.findByIdAndDelete(id, (error, student) => {
      if (error) return next(error);
      return res.status(200).json({ student });
    });
  },

  pendingStudents: (req, res, next) => {
    Student.find({ isApproved: false }, (err, pendingStudents) => {
      if (err) return next(err);
      return res.json({ pendingStudents });
    });
  },
};
