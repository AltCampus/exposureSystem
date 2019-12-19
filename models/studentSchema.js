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

// Implementing The PreSave Function
studentSchema.pre('save', function(next) {
  if (this.password) {
    this.password = bcrypt.hashSync(this.password, 10);
    next();
  }
});
// Comparing The Hash Password With Plane Password
studentSchema.methods.confirmPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
