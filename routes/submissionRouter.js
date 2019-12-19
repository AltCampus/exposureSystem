const express = require('express');

const router = express.Router();
const auth = require('../utils/auth');
const submissionController = require('../controllers/submissionController');
const studentController = require('../controllers/studentController');

router.post('/new', submissionController.newSubmission);
// router.post('/new', controller.newSubmission, studentController.updateStudent);

router.get('/:id', auth.verifyToken, submissionController.getOneSubmission);

router.get('/list', submissionController.findAllSubmission);

module.exports = router;
