// Requring The Jwt Token
var jwt = require('jsonwebtoken');

// Exporting The Module Of Jwt Token
 function generateToken (payload) {
	return jwt.sign(payload, "abcdef");
};

// Verify The  Token
function verifyToken (req, res, next) {
	var Token = req.headers.authorization || '';	
	if (Token) {
		jwt.verify(Token, "abcdef", (err, Decoded) => {
			if (err) res.json({ Token: 'Token Not Matched' });
			next();
		});
	} else {
		return res.json({ Token: 'Token Not Found' });
	}
};

module.exports = {generateToken, verifyToken}