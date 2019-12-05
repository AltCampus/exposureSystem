const Delivery = require('../models/deliverySchema');

module.exports = {
  newDelivery: (req, res) => {
    const delivery = new Delivery(req.body);
    console.log(req.body, 'inside deliveryController');

    delivery
      .save()
      .then(data => {
        // console.log(data, "content data")
        res.send(data);
      })
      .catch(err => {
        res.status(500).json({
          message:
            err.message || 'Some error occurred while initialising delivery',
        });
      });
  },
};
