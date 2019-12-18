const express = require('express');

const router = express.Router();
const auth = require('../utils/auth');
const controller = require('../controllers/submissionController');
const studentController = require('../controllers/studentController');

router.post('/new', controller.newSubmission);
// router.post('/new', controller.newSubmission, studentController.updateStudent);

router.get('/:id', auth.verifyToken, controller.getOneSubmission);

router.get('/list', auth.verifyToken, controller.findAllSubmission);

module.exports = router;
