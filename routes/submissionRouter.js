const express = require('express');

const router = express.Router();
const auth = require('../utils/auth');
const controller = require('../controllers/submissionController');

router.post('/new', controller.newSubmission);

router.get('/:id', auth.verifyToken, controller.getOneSubmission);

router.get('/list', auth.verifyToken, controller.findAllSubmission);

module.exports = router;
