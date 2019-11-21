// Requring The Jwt Token
var jwt = require('jsonwebtoken');
// Exporting The Module Of Jwt Token
module.exports.genrateToken = function(payload) {
	return jwt.sign(payload, 'abcdefgh');
};
