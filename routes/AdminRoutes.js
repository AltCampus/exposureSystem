// Requring The Express
const express = require('express');

// Extracting The Router
const router = express.Router();

// Requring The AdminControllers
const Admin = require('../Controllers/AdminControllers');

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
module.exports = router;
