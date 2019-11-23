// Requring The Auth
var auth = require('../Utils/auth');

// Requring The
var User = require('../Models/userSchema');

// Admin Login Middleware
function adminLogin(req, res, err){
	console.log(req.body);
	var username = req.body.username;
	var Password = req.body.password;
	if (username == process.env.USERNAME && process.env.PASSWORD == Password) {
		var token = auth.genrateToken(username);
		const Admin = {
			userName: username,
			Token: token
		};
		res.status(200).json({ admin: Admin });
	} else {
		res.status(400).json({ error: 'Not Admin' });
	}
};

//User Approval Middleware
function verifyUser(req, res, err){
	req.body.isVerified = true;
	const id = req.params.id;
	User.findByIdAndUpdate(id, req.body, { new: true }, (err, user) => {
		if (err) console.log(err);
		return res.status(200).json({ user: user });
	});
};

// User Rejection Middleware
function removeUser(req, res, err){
	const id = req.params.id;
	User.findByIdAndDelete(id, (err, user) => {
		if (err) return next(err);
		return res.status(200).json({ user: user });
	});
};
// Pending Users Middleware
function pendingUser(req, res, err){
	User.find({ isVerified: false }, (err, users) => {
		res.json({ users: users });
	});
};


module.exports = {adminLogin , verifyUser , removeUser , pendingUser};