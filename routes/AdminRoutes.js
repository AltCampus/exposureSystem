// Requring The Express
const express = require('express');

// Extracting The Router
const router = express.Router();

// Requring The AdminControllers
const Admin = require('../controllers/adminControllers');

// Requring The Schema
const User = require("../Models/userSchema");

//Require verifyUser
const Auth = require('../Utils/auth');

// Route For Verify The Admin
router.post('/login', Admin.adminLogin);

//student approved
router.put('/approved/:id', Auth.verifyAdminToken, Admin.verifyUser);

// Student Rejected
router.delete('/remove/:id', Auth.verifyAdminToken, Admin.removeUser);

// Student Pending
router.get('/pending', Auth.verifyAdminToken, Admin.pendingUser);
// Exporting The Router
////////////////////////////////

// // Making The Route For Getting User Information
// router.get("/", (req, res) => {
//   User.find({}, (err, Users) => {
//     if (err) console.log(err);
//     res.json({ users: Users });
//   });
// });
// // Route For Verify The Admin
// router.post("/", (req, res) => {
//   var username = req.body.username;
//   User.create(req.body, (err, User));
//   if (username === process.env.NAME) {
//     var token = auth.genrateToken();
//   }
// });
module.exports = router;
