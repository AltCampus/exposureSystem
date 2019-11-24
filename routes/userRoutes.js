// Requring The Express
const express = require('express');

// Extracting The Router
const router = express.Router();

// Requring The UsersControllers
var users = require('../controllers/usersControllers');

// Requring The Auth
var auth = require('../utils/auth');

// Users Registeration Route
router.post('/', users.creatingUsers);

// User Status Route
router.get('/', auth.verifyAdminToken, users.userStatus);

// Exporting The Router
module.exports = router;
