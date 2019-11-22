// Requring The Express
const express = require('express');

// Extracting The Router
const router = express.Router();

// Requring The UsersControllers
var Users = require('../Controllers/UsersControllers');

// Requring The Auth
var Auth = require('../Utils/Auth');

// Users Registeration Route
router.post('/', Users.CreatingUsers);

// User Status Route
router.get('/', Auth.verifyAdminToken, Users.UserStatus);

// Exporting The Router
module.exports = router;
