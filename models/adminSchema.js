// Requring The Mongoose
const mongoose = require('mongoose');

// Requring The Bcrypt
const bcrypt = require('bcrypt');

// Extracting The Schema
const Schema = mongoose.Schema;

// Creating The Admin Schema
const adminSchema = new Schema(
	{
		adminname: {
			type: String,
			required: true,
			// unique: true
		},
		password: {
			type: String,
			required: true,
			// unique: true
		}
	},
	{ timestamps: true }
);

// Implementing The PreSave Function
adminSchema.pre('save', function(next) {
	if (this.password) {
		this.password = bcrypt.hashSync(this.password, 10);
		next();
	}
});

// Comparing The Hash Password With Plane Password
adminSchema.methods.confirmPassword = function(password) {
    return bcrypt.compareSync(password,this.password);
}
// Creating The Model Of The Schema
const Admin = mongoose.model('Admin', adminSchema);

// Exporting The Model Of Admin Schema
module.exports = Admin;
