const express = require('express');

const router = express.Router();
const auth = require('../utils/auth');
const submissionController = require('../controllers/submissionController');

router.post('/new', submissionController.newSubmission);

// router.post('/new', controller.newSubmission, studentController.updateStudent);

router.get('/:id', auth.verifyToken, submissionController.getOneSubmission);

router.get('/', submissionController.findAllSubmission);

module.exports = router;
