const express = require('express');
const router = express.Router();
const auth = require('../utils/auth');
const controllers = require('../controllers/feedbackControllers');
// Handlinng The Route For The Feedback
router.post('/addFeedback', controllers.addFeedback);
// Handling The Route For Getting The Single Feed
router.get('/getFeedback/:id', auth.verifyToken, controllers.getFeedback);
// Handling The For The Global Feeds
router.get('/getFeedback', auth.verifyToken, controllers.globalFeedback);

module.exports = router;
