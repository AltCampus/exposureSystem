const express = require("express");
const router = express.Router();
var users = require("../controllers/usersController");
var auth = require("../utils/auth");

router.post("/register", users.registerUser);

router.post("/login", users.loginUser);

// User Status Route

//TODO
//Relocate this line
router.get("/all", auth.verifyToken, users.userStatus);

module.exports = router;
