const express = require('express');
const router = express.Router();
var users = require('../controllers/usersControllers');
var auth = require('../utils/auth');

// Users Registeration Route
router.post('/', users.registerUser); //changed from creatingUsers

// User Login Route
router.post('/login', users.loginUser); //changed from userLogin

// User Status Route
router.get('/all', auth.verifyAdminToken, users.userStatus);

module.exports = router;
