// Requring The Express
const express = require('express');

// Extracting The Router
const router = express.Router();

// Requring The UsersControllers
var Users = require('../controllers/usersControllers');

// Requring The Auth
var Auth = require('../Utils/auth');

// Users Registeration Route
router.post('/', Users.creatingUsers);

// User Status Route
router.get('/', Users.userStatus);

// Exporting The Router
module.exports = router;
