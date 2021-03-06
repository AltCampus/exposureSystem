const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const adminSchema = new Schema(
  {
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: { type: Boolean, default: true },
  },
  { timestamps: true },
);

adminSchema.pre('save', function(next) {
  if (this.password) {
    this.password = bcrypt.hashSync(this.password, 10);
    next();
  }
});

// Comparing The Hash Password With Plain Password
adminSchema.methods.confirmPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};
const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
