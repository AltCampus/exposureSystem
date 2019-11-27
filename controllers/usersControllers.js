// Requring The UserSchema
const User = require('../models/userSchema');

// Requring The Auth
const auth = require('../utils/auth');
// Users Registration
function creatingUsers(req, res, next) {
	User.create(req.body, (err, UserCreated) => {
		if (err) return next(err);
		res.status(200).json({ User: UserCreated });
	});
}

// Users Login Routes
function userLogin(req, res, next) {
	var { username, password, email } = req.body;
	User.findOne({ email }, (err, user) => {
		if (err) return next(err);
		if (!user) res.json({ user: 'User Not Found' });
		if (!user.confirmPassword(password)) res.json({ user: 'Password Is Not Correct' });
		var token = auth.generateToken(username);
		res.status(200).json({ user: user, Token: token });
	});
}
// All Users Status
function userStatus(req, res, next) {
	User.find({}, (err, Users) => {
		if (err) return next(err);
		res.status(200).json({ users: Users });
	});
}

// Exporting The Middlewares
module.exports = { creatingUsers, userStatus, userLogin };
