// Requring The UserSchema
const User = require("../models/userSchema");
var auth = require("../utils/auth");

// Users Registration
function creatingUsers(req, res, next) {
  User.create(req.body, (err, UserCreated) => {
    if (err) return next(err);
    res.status(200).json({ User: UserCreated });
  });
}

// function userLogin(req, res, next) {
//   var username = req.body.username;
//   console.log(username);
//   var password = req.body.password;
//   console.log("in student login", password);
//   User.findOne(username, (err, user) => {
//     if (err) return next(err);
//     if (!user) res.json({ user: "not found" });
//     // if (!user.confirmPassword(password)) res.json({ user: "no user" });
//     var token = auth.generateToken({ userid: user._id });
//     console.log(token);
//     res.json({ user: user, Token: token });
//   });
// }

// All Users Status
function userStatus(req, res, next) {
  User.find({}, (err, Users) => {
    if (err) console.log(err);
    res.status(200).json({ users: Users });
  });
}

module.exports = { creatingUsers, userStatus, userLogin };
