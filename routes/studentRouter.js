const express = require('express');
const studentController = require('../controllers/studentController');
const auth = require('../utils/auth');

const router = express.Router();

router.post('/register', studentController.registerUser);

router.post('/login', studentController.loginUser);

router.get('/:userId', studentController.findUser);

router.get('/status/list', auth.verifyToken, studentController.userStatus);

module.exports = router;
