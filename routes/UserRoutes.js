// Requring The Express
const express = require("express");

// Extracting The Router
const router = express.Router();

// Requring The UsersControllers
var Users = require("../controllers/usersControllers");

// Requring The Auth
var Auth = require("../utils/auth");

// Users Registeration Route
router.post("/", Users.creatingUsers);

router.post("/login", Users.userLogin);

// User Status Route
router.get("/", Auth.verifyAdminToken, Users.userStatus);

// Exporting The Router
module.exports = router;
