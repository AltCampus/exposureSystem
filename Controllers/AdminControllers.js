// Requring The Auth
var auth = require("../Utils/Auth");
var User = require("../Models/userSchema")
// Admin Login
module.exports.AdminLogin =  (req, res, err) => {
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
}

//User verification

module.exports.verifyUser = (req , res , err) => {
	console.log(req.body.username,"cp2")
	const {username} = req.body 
	User.findOne({username},(err,user)=>{
		console.log("cp3")
		if(err) return err;
		return res.json(user)
	})
}

