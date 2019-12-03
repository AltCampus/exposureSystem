const Feedback = require("../models/feedbackSchema");
// Handling The Route For The Feedback Submission
function newFeedback(req, res, next) {
  Feedback.create(req.body, (err, feedback) => {
    if (err) return next(err);
    res.status(200).json({ feedback });
  });
}
// Handling The Route For The  Feed For Single User
function getFeedback(req, res, next) {
  const id = req.params.id;
  Feedback.findById(id, (err, feedback) => {
    if (err) return next(err);
    res.status(200).json({ feedback });
  });
}
// Handling The Route for The All Global Feeds
function globalFeedback(req, res, next) {
  Feedback.find({}, (err, feedback) => {
    if (err) return next(err);
    res.status(200).json({ feedback });
  });
}
module.exports = { newFeedback, getFeedback, globalFeedback };
