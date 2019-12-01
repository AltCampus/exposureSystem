const express = require("express");
const router = express.Router();
var users = require("../controllers/usersControllers");
var auth = require("../utils/auth");

router.post("/", users.registerUser); //changed from creatingUsers

router.post("/login", users.loginUser); //changed from userLogin

// User Status Route
router.get("/all", auth.verifyAdminToken, users.userStatus);

module.exports = router;
