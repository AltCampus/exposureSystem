const express = require('express');
const router = express.Router();
const Admin = require('../models/adminSchema');

/* GET home page. */
router.get('/*', function(req, res, next) {
  res.render('index', { title: 'Exposure System' });
});

module.exports = router;
