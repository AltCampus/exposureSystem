// Requring The UserSchema
const User = require('../Models/userSchema');

// Users Registration
module.exports.UserInformation = (req,res,next) => {
	User.create(req.body, (err, UserCreated) => {
		if (err) return next(err);
		res.status(200).json({ User: UserCreated });
	});
};

// All Users Status
module.exports.UserStatus = (req,res,next) => {
    User.find({}, (err, Users) => {
		if (err) console.log(err);
		res.status(200).json({ users: Users });
	});
}