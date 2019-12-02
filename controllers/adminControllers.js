var auth = require('../utils/auth');

var User = require('../models/userSchema');

// Requring The SchemaModel of Admin
var Admin = require('../models/adminSchema');

// Admin Registration Middleware
function adminRegistration(req, res, next) {
	Admin.create(req.body, (err, adminCreated) => {
		if (err) return next(err);
		res.status(200).json({ admin: adminCreated });
	});
}

// Admin Login Middleware
function adminLogin(req, res, next) {
	var { adminname, password } = req.body;
	Admin.findOne({ adminname }, (err, admin) => {
		if (err) return next(err);
		if (!admin) res.json({ admin: 'NOT ADMIN' });
		if (!admin.confirmPassword(password)) res.json({ admin: 'Not Admin' });
		var token = auth.generateToken(adminname);
		res.status(200).json({ admin: admin, Token: token });
	});
}
// function adminLogin(req, res, err) {
//   console.log(req.body);
//   var username = req.body.username;
//   var Password = req.body.password;
//   if (username == process.env.USERNAME && process.env.PASSWORD == Password) {
//     var token = auth.genrateToken(username);
//     const Admin = {
//       userName: username,
//       Token: token
//     };
//     res.status(200).json({ admin: Admin });
//   } else {
//     res.status(400).json({ error: "Not Admin" });
//   }

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
		if (err) return next(err);
		res.json({ users: users });
	});
}

// Exporting The Middlewares
module.exports = {
	adminLogin,
	verifyUser,
	removeUser,
	pendingUser,
	adminRegistration
};
