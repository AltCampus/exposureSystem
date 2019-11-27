// Requring The Auth
var auth = require('../utils/auth');

// Requring The SchemaModel of user
var User = require('../models/userSchema');

// Requring The SchemaModel of Admin
var Admin = require('../models/adminSchema');

// Admin Registration Middleware
function adminRegistration(req, res, next) {
	Admin.create(req.body, (err, adminCreated) => {
		console.log('create');
		if (err) return next(err);
		res.status(200).json({ admin: adminCreated });
	});
}

// Admin Login Middleware
function adminLogin(req, res, next) {
	var { adminname ,password} = req.body;
	Admin.findOne({ adminname }, (err, admin) => {
		if (err) return next(err);
		if (!admin) res.json({ admin: 'NOT ADMIN' });
		if (!admin.confirmPassword(password)) res.json({ admin: 'Not Admin' });
		var token = auth.generateToken(adminname);
		res.status(200).json({ admin: admin, Token: token });
	});
}

//User Approval Middleware
function verifyUser(req, res, err) {
	req.body.isVerified = true;
	const id = req.params.id;
	User.findByIdAndUpdate(id, req.body, { new: true }, (err, users) => {
		if (err) console.log(err);
		return res.status(200).json({ user: users });
	});
}

// User Rejection Middleware
function removeUser(req, res, err) {
	const id = req.params.id;
	User.findByIdAndDelete(id, (err, user) => {
		if (err) return next(err);
		return res.status(200).json({ user: users });
	});
}

// Pending Users Middleware
function pendingUser(req, res, err) {
	User.find({ isVerified: false }, (err, users) => {
		res.json({ users: users });
	});
}

// Exporting The Middlewares
module.exports = { adminLogin, verifyUser, removeUser, pendingUser, adminRegistration };
