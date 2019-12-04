const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const deliverySchema = new Schema(
  {
    type: {
      type: 'String',
      enum: ['resource', 'challenge'],
      required: true,
    },
    contentId: [
      { type: Schema.Types.ObjectId, ref: 'contentSchema', required: true },
    ],
    userId: [
      { type: Schema.Types.ObjectId, ref: 'userSchema', required: true },
    ],
    isSubmitted: { type: Boolean, default: false },
    isChallenge: { type: Boolean, default: false },
    // submissionId: [{ type: Schema.Types.ObjectId, ref: "submissionSchema" }],
    challengeMembers: [{ type: Schema.Types.ObjectId, ref: 'userSchema' }],
    pointsRewarded: { type: Number, required: true },
  },
  {
    timestamps: true,
  },
);

const Delivery = mongoose.model('Delivery', deliverySchema);

module.exports = Delivery;
