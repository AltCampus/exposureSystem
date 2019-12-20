const express = require('express');
const studentController = require('../controllers/studentController');
const Student = require('../models/studentSchema');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.get('/me', (req, res, next) => {
  const token = req.headers.authorization;
  const email = jwt.verify(token, 'abcdef');
  Student.findOne({ email }, (err, student) => {
    return err ? res.json(err) : res.json(student);
  });
});

router.post('/register', studentController.registerStudent);

router.post('/login', studentController.loginStudent);

router.get('/:userId', studentController.findStudent);

router.get('/status/list', studentController.studentList);

router.put('/update/:id', studentController.updateStudent);

router.put('/update/points', studentController.updateStudentPoints);

module.exports = router;
