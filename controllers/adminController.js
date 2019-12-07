var auth = require('../utils/auth');

var User = require('../models/userSchema');

// Requring The SchemaModel of Admin
var Admin = require('../models/adminSchema');

//TODO
//rrestructure controller

// Admin Login Middleware
function adminLogin(req, res, next) {
  var { email, password } = req.body;
  if (email.length < 10 || password.length < 6) {
    return res.status(401).json({ error: 'INVALID PASSWORD' });
  }
  Admin.findOne({ email }, (err, admin) => {
    if (err) return next(err);
    if (!admin) return res.status(401).json({ admin: 'NOT ADMIN' });
    if (!admin.confirmPassword(password))
      return res.json({ admin: 'Not Admin' });
    var token = auth.generateToken(email);
    res.status(200).json({ admin: admin, Token: token });
  });
}

//User Approval Middleware
function approveUser(req, res, err) {
  req.body.isApproved = true;
  const id = req.params.id;
  User.findByIdAndUpdate(id, req.body, { new: true }, (err, users) => {
    if (err) console.log(err);
    return res.status(200).json({ user: users });
  });
}

// User Rejection Middleware
function removeUser(req, res, err) {
  const id = req.params.id;
  User.findByIdAndDelete(id, (err, user) => {
    if (err) return next(err);
    return res.status(200).json({ user: users });
  });
}

// Pending Users Middleware
function pendingUsers(req, res, err) {
  User.find({ isApproved: false }, (err, users) => {
    if (err) return next(err);
    res.json({ users: users });
  });
}

// Exporting The Middlewares
module.exports = {
  adminLogin,
  approveUser,
  removeUser,
  pendingUsers,
};
