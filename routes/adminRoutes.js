// Requring The Express
const express = require('express');

// Extracting The Router
const router = express.Router();

// Requring The AdminControllers
const admin = require('../controllers/adminControllers');

//Require verifyUser
const auth = require('../utils/auth');

// Route For The Admin Registration
// router.post('/registration', admin.adminRegistration);

// Route For Verify The Admin
router.post('/login', admin.adminLogin);

//student approved
router.put('/approved/:id', auth.verifyAdminToken, admin.verifyUser);

// Student Rejected
router.delete('/remove/:id', auth.verifyAdminToken, admin.removeUser);

// Student Pending
router.get('/pending', auth.verifyAdminToken, admin.pendingUser);

// Exporting The router
module.exports = router;
