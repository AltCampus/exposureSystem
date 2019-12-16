const express = require('express');
const jwt = require('jsonwebtoken')

const router = express.Router();
const admin = require('../controllers/adminController');
const auth = require('../utils/auth');

const Admin = require('../models/adminSchema')

router.get('/me' , (req , res , next) => {  
  const token = req.headers.authorization;
  const email = jwt.verify(token,'abcdef')
  Admin.findOne({email} , (err , admin) =>{
    return err ? res.json(err) : res.json(admin);
  }
  )
})

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
