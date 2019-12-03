const express = require("express");
const router = express.Router();
const auth = require("../utils/auth");
const controllers = require("../controllers/feedbackController");
// Handlinng The Route For The Feedback
router.post("/new", controllers.newFeedback);
// Handling The Route For Getting The Single Feed
router.get("/:id", auth.verifyToken, controllers.getFeedback);
// Handling The For The Global Feeds
router.get("/", auth.verifyToken, controllers.globalFeedback);

module.exports = router;
