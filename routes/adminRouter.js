const express = require('express');
const router = express.Router();
const admin = require('../controllers/adminController');
const auth = require('../utils/auth');

router.post('/login', admin.adminLogin);

//student approved
router.put('/approved/:id', auth.verifyToken, admin.approveUser);

// Student Rejected
router.delete('/remove/:id', auth.verifyToken, admin.removeUser);

// Student Pending
router.get('/pending-approvals', auth.verifyToken, admin.pendingUsers);

module.exports = router;
