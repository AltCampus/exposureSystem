const express = require('express');
const router = express.Router();
const users = require("../controllers/usersController");
const auth = require("../utils/auth");


router.post('/register', users.registerUser);

router.post('/login', users.loginUser);

router.get('/:userId', users.findUser);
// User Status Route

//TODO
//Relocate this line
router.get('/status/all', auth.verifyToken, users.userStatus);

module.exports = router;
