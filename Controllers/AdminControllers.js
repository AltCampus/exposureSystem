// Requring The Auth
var auth = require("../Auth/Auth");
// Admin Login
module.exports.AdminLogin =  (req, res, err) => {
	var username = req.body.username;
	var Password = req.body.password;
	if (username == process.env.NAME && process.env.PASSWORD == Password) {
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