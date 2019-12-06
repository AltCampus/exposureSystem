const express = require('express');
const router = express.Router();
// const auth = require('../utils/auth');
const controllers = require('../controllers/deliveryController');

router.post('/new', controllers.newDelivery);

// router.put('/update', controllers.updateDeliveryInfo);

module.exports = router;
