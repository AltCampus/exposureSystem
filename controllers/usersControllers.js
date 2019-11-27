const User = require("../models/userSchema");
const auth = require("../utils/auth");

function registerUser(req, res, next) {
  console.log("register user called");
  User.create(req.body, (err, UserCreated) => {
    if (err) return next(err);
    res.status(200).json({ User: UserCreated });
  });
}

function loginUser(req, res, next) {
  console.log("inside loginUser");
  var { username, password, email } = req.body;
  User.findOne({ email }, (err, user) => {
    if (err) return next(err);
    if (!user) res.json({ user: "User Not Found" });
    if (!user.confirmPassword(password)) console.log("line 19");
    res.json({ user: "Password Is Not Correct" });
    var token = auth.generateToken(username);
    console.log(token);
    res.status(200).json({ user: user, Token: token });
  });
}

// All Users Status
function userStatus(req, res, next) {
  User.find({}, (err, Users) => {
    if (err) return next(err);
    res.status(200).json({ users: Users });
  });
}

module.exports = { registerUser, userStatus, loginUser };
