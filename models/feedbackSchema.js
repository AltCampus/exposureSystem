// Requiring The Mongoose
const mongoose = require("mongoose");
// Extracting The Schema from Mongoose
const Schema = mongoose.Schema;

// Making The Submission Schema
const submissionSchema = new Schema(
  {
    contentSummary: {
      type: String,
      required: true
    },
    userid: [{ type: Schema.Types.ObjectId, ref: "userSchema" }],
    contentid: [{ type: Schema.Types.ObjectId, ref: "contentSchema" }]
  },
  { timestamps: true }
);

//function to push contentid to userSchema on successful submission

// Making The Model Of The Schema
const Submission = mongoose.model("Submission", submissionSchema);

// Exporting The Schema
module.exports = Submission;
