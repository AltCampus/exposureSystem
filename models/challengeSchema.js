const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var challengeSchema = new Schema(
  {
    userId: String,
    contentId: String,
    hasSubmitted: Boolean,
    submission: String,
    pointsAwarded: String,
    type: {
      type: 'string',
      enum: ['individual', 'pair', 'group'],
    },
    pair: [
      {
        type: app.mongoose.Schema.ObjectId,
        ref: 'userSchema',
      },
    ],
    group: [
      {
        type: app.mongoose.Schema.ObjectId,
        ref: 'userSchema',
      },
    ],
    hasOptedOut: boolean,
    deadline: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  },
);

const Challenge = mongoose.model('Challenge', challengeSchema);

module.exports = Challenge;
