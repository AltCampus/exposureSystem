// Requring The Express
const express = require('express');

// Extracting The Router
const router = express.Router();

// Requring The UsersControllers
var Users = require('../Controllers/UsersControllers');

// Users Registeration Route
router.post('/', Users.UserInformation);
// User Status Route
router.get('/', Users.UserStatus);

// Exporting The Router
module.exports = router;
