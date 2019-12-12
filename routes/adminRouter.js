const express = require('express');

const router = express.Router();
const admin = require('../controllers/adminController');
const auth = require('../utils/auth');

router.post('/login', admin.adminLogin);

router.put('/approved/:id', auth.verifyToken, admin.approveStudent);

router.delete('/remove/:id', auth.verifyToken, admin.removeStudent);

router.get('/pending-approvals', auth.verifyToken, admin.pendingStudents);

module.exports = router;
