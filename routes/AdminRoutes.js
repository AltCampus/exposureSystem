// Requring The Express
const express = require('express');

// Extracting The Router
const router = express.Router();
// Requring The AdminControllers
const Admin = require('../Controllers/AdminControllers');

// Route For Verify The Admin
router.post('/login', Admin.AdminLogin);

// Exporting The Router
module.exports = router;
