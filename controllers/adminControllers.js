// Requring The Auth
var auth = require('../utils/auth');

// Requring The schemaModel of user
var user = require('../models/userSchema');

// Admin Login Middleware
function adminLogin(req, res, err) {
	console.log(req.body);
	var username = req.body.username;
	var Password = req.body.password;
	if (username == process.env.USERNAME && process.env.PASSWORD == Password) {
		var token = auth.generateToken(username);
		const Admin = {
			userName: username,
			Token: token
		};
		res.status(200).json({ admin: Admin });
	} else {
		res.status(400).json({ error: 'Not Admin' });
	}
}

//User Approval Middleware
function verifyUser(req, res, err) {
	req.body.isVerified = true;
	const id = req.params.id;
	user.findByIdAndUpdate(id, req.body, { new: true }, (err, users) => {
		if (err) console.log(err);
		return res.status(200).json({ user: users });
	});
}

// User Rejection Middleware
function removeUser(req, res, err) {
	const id = req.params.id;
	user.findByIdAndDelete(id, (err, user) => {
		if (err) return next(err);
		return res.status(200).json({ user: users });
	});
}
// Pending Users Middleware
function pendingUser(req, res, err) {
	user.find({ isVerified: false }, (err, users) => {
		res.json({ users: users });
	});
}

module.exports = { adminLogin, verifyUser, removeUser, pendingUser };
