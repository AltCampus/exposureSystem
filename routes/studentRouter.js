const express = require('express');
const studentController = require('../controllers/studentController');
const auth = require('../utils/auth');

const router = express.Router();

router.post('/register', studentController.registerStudent);

router.post('/login', studentController.loginStudent);

router.get('/:userId', studentController.findStudent);

router.get('/status/list', studentController.studentList);

module.exports = router;
