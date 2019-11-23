// Requring The Express
const express = require("express");
// Extracting The Router
const router = express.Router();

// Requring The Schema
const User = require("../Models/userSchema");
// Requring The Authpac
var auth = require("../Auth/Auth");

// Making The Route For Getting User Information
router.get("/", (req, res) => {
  User.find({}, (err, Users) => {
    if (err) console.log(err);
    res.json({ users: Users });
  });
});
// Route For Verify The Admin
router.post("/", (req, res) => {
  var username = req.body.username;
  User.create(req.body, (err, User));
  if (username === process.env.NAME) {
    var token = auth.genrateToken();
  }
});
module.exports = router;
