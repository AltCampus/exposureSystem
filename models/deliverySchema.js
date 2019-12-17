const mongoose = require('mongoose');

const { Schema } = mongoose;

const deliverySchema = new Schema(
  {
    type: {
      type: 'String',
      enum: ['resource', 'challenge'],
      // required: true,
    },
    content: { type: Schema.Types.ObjectId, ref: 'Content', required: true },
    student: { type: Schema.Types.ObjectId, ref: 'Student', required: true },
    isSubmitted: { type: Boolean, default: false },
    isChallenge: { type: Boolean, default: false },
    // submissionId: [{ type: Schema.Types.ObjectId, ref: "submissionSchema" }],
    challengeMembers: [{ type: Schema.Types.ObjectId, ref: 'userSchema' }],
    pointsRewarded: { type: Number, required: true, default: 0 },
  },
  {
    timestamps: true,
  },
);

const Delivery = mongoose.model('Delivery', deliverySchema);

module.exports = Delivery;
