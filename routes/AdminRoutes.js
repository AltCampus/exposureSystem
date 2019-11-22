// Requring The Express
const express = require('express');

// Extracting The Router
const router = express.Router();
// Requring The AdminControllers
const Admin = require('../Controllers/AdminControllers');

//Require verifyUser
const User = require('../Utils/VerifyAdmin');

// Route For Verify The Admin
router.post('/login', Admin.AdminLogin);

router.put('/verify' , User.verifyAdmin , Admin.verifyUser );

// Exporting The Router
module.exports = router;
