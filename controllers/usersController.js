const User = require('../models/userSchema');
const auth = require('../utils/auth');
const mail = require('../utils/mailer');

// TODO
// restructure controller

function registerUser(req, res, next) {
  const { username, email, password } = req.body;
  if (email.length < 10 && password.length < 6) {
    return res.status(401).json('INVALID USER');
  }
  if (!username || !email || !password) {
    return res.status(401).json({ error: 'INVALID USER' });
  }
  User.create(req.body, (err, UserCreated) => {
    if (err) return next(err);
    console.log(UserCreated);
    res.status(200).json({ User: UserCreated });
  });
}

function loginUser(req, res, next) {
  var { password, email } = req.body;
  if (!email || !password) {
    return res.status(401).json({ error: "INVALID USER" });

  }
  User.findOne({ email }, (err, user) => {
    if (err) return next(err);
    if (!user) return res.json({ user: 'User Not Found' });
    if (!user.confirmPassword(password))
      return res.json({ user: 'Password Is Not Correct' });
    var token = auth.generateToken(email);
    console.log(user);
    res.status(200).json({ user: user, Token: token });
  });
}

function findUser(req, res) {
  User.findById(req.params.userId)
    .then(user => {
      if (!user) {
        return res.status(404).send({
          message: 'User not found with id ' + req.params.userId,
        });
      }
      res.json({ user });
    })
    .catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'User not found with id ' + req.params.userId,
        });
      }
      return res.status(500).json({
        message: 'Error retrieving user with id ' + req.params.userId,
      });
    });
}

// All Users Status
function userStatus(req, res, next) {
  User.find({}, (err, Users) => {
    if (err) return next(err);
    res.status(200).json({ users: Users });
  });
}

module.exports = { registerUser, userStatus, loginUser, findUser };
