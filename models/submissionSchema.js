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
    userid: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    contentid: [{ type: Schema.Types.ObjectId, ref: 'Content' }],
    pointsAwarded: Number,
  },
  { timestamps: true },
);

//function to push contentid to userSchema on successful submission

const Submission = mongoose.model('Submission', submissionSchema);

module.exports = Submission;
