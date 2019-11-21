// Requring The Express
const express = require('express');
// Extracting The Router
const router = express.Router();

// Requring The Schema
const User = require('../Models/userSchema');

// Making The Route For Getting User Information
router.get('/', (req, res) => {
	User.find({}, (err, Users) => {
		if (err) console.log(err);
		res.json({ users: Users });
	});
});
// Route For Verify The Admin
router.post("/",(req,res) => {
    console.log(req.body)
})
module.exports = router;