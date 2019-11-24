// Requring The UserSchema
const user = require('../models/userSchema');

// Users Registration
function creatingUsers(req,res,next){
	user.create(req.body, (err, UserCreated) => {
		if (err) return next(err);
		res.status(200).json({ User: UserCreated });
	});
};

// All Users Status
function userStatus(req,res,next){
    user.find({}, (err, Users) => {
		if (err) console.log(err);
		res.status(200).json({ users: Users });
	});
}

module.exports = {creatingUsers , userStatus};