// Requring The Jwt Token
var jwt = require('jsonwebtoken');

// Exporting The Module Of Jwt Token
function generateToken(payload) {
	console.log('generateToken called at Utils/auth');
	return jwt.sign(payload, process.env.SECRETID);
}

// Verify The Admin Token
function verifyAdminToken(req, res, next) {
	var token = req.headers.authorization || '';
	if (token) {
		jwt.verify(Token, process.env.SECRETID, (err, Decoded) => {
			if (err) res.json({ Token: 'Not Admin' });
			next();
		});
	} else {
		return res.json({ Token: 'Token Not Found' });
	}
}
// Exporting The Middlewares
module.exports = { generateToken, verifyAdminToken };
