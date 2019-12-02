const express = require("express");
const router = express.Router();
const admin = require("../controllers/adminControllers");
const auth = require("../utils/auth");

//app.use('/admin', adminRoutes);

router.post("/registration", admin.adminRegistration);

router.post("/login", admin.adminLogin);

//student approved
router.put("/approved/:id", auth.verifyAdminToken, admin.verifyUser);

// Student Rejected
router.delete("/remove/:id", auth.verifyAdminToken, admin.removeUser);

// Student Pending
router.get("/pending", auth.verifyAdminToken, admin.pendingUser);

module.exports = router;
