/* eslint-disable comma-dangle */
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const { Schema } = mongoose;

const studentSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isInCampus: false,
    isActive: false,
    // isAdmin: false,
    isApproved: { type: Boolean, default: false },
    sentContent: [{ type: Schema.Types.ObjectId, ref: 'contentSchema' }],
    points: 0,
  },
  {
    timestamps: true,
  },
);

studentSchema.pre('save', function(next) {
  if (this.password) {
    this.password = bcrypt.hashSync(this.password, 10);
    console.log(this.password, 'this.password')
    next();
  }
});

studentSchema.methods.confirmPassword = function(password) {
  console.log('inside schema')
  return bcrypt.compareSync(password, this.password);
};

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
