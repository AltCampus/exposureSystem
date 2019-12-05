const express = require('express');
const router = express.Router();
// const auth = require('../utils/auth');
// const controllers = require('../controllers/feedbackController');

router.post('/new', controllers.newFeedback);

module.exports = router;
