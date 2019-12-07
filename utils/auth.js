// Requring The Jwt Token
var jwt = require("jsonwebtoken");

// Exporting The Module Of Jwt Token
function generateToken(payload) {
  return jwt.sign(payload, "abcdef");
}

// Verify The  Token
function verifyToken(req, res, next) {
  var token = req.headers.authorization || "";
  if (token) {
    jwt.verify(token, "abcdef", (err, Decoded) => {
      if (err) res.json({ token: "Token Not Matched" });
      next();
    });
  } else {
    return res.json({ token: "Token Not Found" });
  }
}

module.exports = { generateToken, verifyToken };
