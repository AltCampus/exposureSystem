const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const submissionSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    contentSummary: {
      type: String,
      required: true,
    },
    student: { type: Schema.Types.ObjectId, ref: 'Student' },
    content: { type: Schema.Types.ObjectId, ref: 'Content' },
    pointsAwarded: Number,
  },
  { timestamps: true },
);

const Submission = mongoose.model('Submission', submissionSchema);

module.exports = Submission;
