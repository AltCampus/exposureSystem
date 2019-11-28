//Require Mongose
const mongoose = require("mongoose");

//Requring The Bcrypt
const bcrypt = require("bcrypt");

//Extracting Schema
const Schema = mongoose.Schema;

//Creating user schema
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    isInCampus: Boolean,
    isActive: Boolean,
    isAdmin: false,
    isVerified: { type: Boolean, default: false },
    sentContent: [{ type: ObjectId, ref: "contentSchema" }]
  },
  {
    timestamps: true
  }
);

// Implementing The PreSave Function
userSchema.pre("save", function(next) {
  if (this.password) {
    this.password = bcrypt.hashSync(this.password, 10);
    next();
  }
});
// Comparing The Hash Password With Plane Password
userSchema.methods.confirmPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

//Creating User Model
const User = mongoose.model("User", userSchema);

//Exporting User Model
module.exports = User;
