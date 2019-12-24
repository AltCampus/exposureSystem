const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contentSchema = new Schema(
  {
    type: {
      type: 'string',
      enum: ['resource', 'challenge'],
    },
    contentUrl: String,
    title: String,
    description: String,
  },
  {
    timestamps: true,
  },
);

const Content = mongoose.model('Content', contentSchema);

module.exports = Content;
