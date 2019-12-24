const express = require('express');
const router = express.Router();
const controllers = require('../controllers/deliveryController');

router.post('/new', controllers.newDelivery);

router.get('/:deliveryId', controllers.findOneDelivery);

// router.put('/update', controllers.updateDeliveryInfo);

module.exports = router;
