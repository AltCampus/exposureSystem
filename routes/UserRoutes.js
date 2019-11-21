// Requring The Express
const express = require('express');
// Extracting The Router
const router = express.Router();
// Requring The UserSchema
const User = require('../Models/userSchema');
// Users Registeration Route
router.post('/', (req, res, next) => {
	User.create(req.body, (err, UserCreated) => {
		if (err) return next(err);
		res.json({ User: UserCreated });
	});
});
// Exporting The Router
module.exports = router;
