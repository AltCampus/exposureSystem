// Requring The UserSchema
const User = require('../models/userSchema');

// Users Registration
function creatingUsers(req,res,next){
	User.create(req.body, (err, UserCreated) => {
		if (err) return next(err);
		res.status(200).json({ User: UserCreated });
	});
};

// All Users Status
function userStatus(req,res,next){
    User.find({}, (err, Users) => {
		if (err) console.log(err);
		res.status(200).json({ users: Users });
	});
}

module.exports = {creatingUsers , userStatus};