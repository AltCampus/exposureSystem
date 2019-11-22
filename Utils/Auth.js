// Requring The Jwt Token
var jwt = require('jsonwebtoken');

// Exporting The Module Of Jwt Token
module.exports.genrateToken = function(payload) {
	return jwt.sign(payload, process.env.SECRETID);
};

// Verify The Admin Token
module.exports.verifyAdminToken = function(req, res, next) {
	var Token = req.headers.authorization || '';
	console.log(req.headers,"Token")
	if (Token) {
		jwt.verify(Token, process.env.SECRETID, (err, Decoded) => {
			if (err) res.json({ Token: 'Not Admin' });
			next();
		});
	} else {
		return res.json({ Token: 'Token Not Found' });
	}
};
