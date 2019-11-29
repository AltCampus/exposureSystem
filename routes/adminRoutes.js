const express = require("express");
const router = express.Router();
const admin = require("../controllers/adminControllers");
const auth = require("../utils/auth");

// Route For The Admin Registration
router.post('/registration', admin.adminRegistration);

// Route For Verify The Admin
router.post("/login", admin.adminLogin);

//student approved
router.put("/approved/:id", auth.verifyAdminToken, admin.verifyUser);

// Student Rejected
router.delete("/remove/:id", auth.verifyAdminToken, admin.removeUser);

// Student Pending
router.get("/pending", auth.verifyAdminToken, admin.pendingUser);

module.exports = router;
