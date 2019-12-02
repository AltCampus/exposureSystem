// Requiring The Mongoose
const mongoose = require('mongoose');
// Extracting The Schema
const Schema = mongoose.Schema;

// Making The Submission Schema
const feedbackSchema = new Schema(
	{
		contentSummary: {
			type: String,
			required: true
		}
	},
	{ timestamps: true }
);

// Making The Model Of The Schema
const Feedback = mongoose.model('Feedback', feedbackSchema);

// Exporting The Schema
module.exports = Feedback;
