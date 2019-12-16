const express = require('express');
const studentController = require('../controllers/studentController');
const auth = require('../utils/auth');
const Student = require('../models/studentSchema');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.get('/me' , (req , res , next) => {  
    console.log('fffffffffffff')
    console.log(req.headers);
    const token = req.headers.authorization;
    const email = jwt.verify(token,'abcdef')
    console.log(email , token , 'ffff')
    Student.findOne({email} , (err , student) =>{
        console.log(err,student,'jj')
      return err ? res.json(err) : res.json(student);
    }
    )
  })
  
router.post('/register', studentController.registerStudent);

router.post('/login', studentController.loginStudent);

router.get('/:userId', studentController.findStudent);

router.get('/status/list', studentController.studentList);

module.exports = router;
