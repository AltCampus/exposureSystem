const express = require('express');

const router = express.Router();
const admin = require('../controllers/adminController');
const auth = require('../utils/auth');

router.post('/login', admin.adminLogin);

// student approved
router.put(
  '/pending-approvals/approved/:id',
  auth.verifyToken,
  admin.approveStudent,
);

// Student Rejected
router.delete(
  '/pending-approvals/remove/:id',
  auth.verifyToken,
  admin.removeStudent,
);

// Student Pending
router.get('/pending-approvals', auth.verifyToken, admin.pendingStudents);

module.exports = router;
