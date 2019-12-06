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

  //   findOneDelivery: (req, res) => {
  //     Delivery.findById(req.params.deliveryId)
  //       .then(delivery => {
  //         if (!delivery) {
  //           return res.status(404).send({
  //             message: 'Delivery not found with id ' + req.params.deliveryId,
  //           });
  //         }
  //         res.json({ delivery });
  //       })
  //       .catch(err => {
  //         if (err.kind === 'ObjectId') {
  //           return res.status(404).send({
  //             message: 'Delivery not found with id ' + req.params.deliveryId,
  //           });
  //         }
  //         return res.status(500).json({
  //           message: 'Error retrieving Delivery with id ' + req.params.deliveryId,
  //         });
  //       });
  //   },

  //   updateDeliveryInfo: (req, res) => {
  //     // Validate Request
  //     if (!req.body.type) {
  //       return res.status(400).send({
  //         message: 'Description content can not be empty',
  //       });
  //     } else if (!req.body.isSubmitted) {
  //       return res.status(400).send({
  //         message: 'Description content can not be empty',
  //       });
  //     } else if (!req.body.pointsRewarded) {
  //       return res.status(400).send({
  //         message: 'Description content can not be empty',
  //       });
  //     }

  //     Delivery.findByIdAndUpdate(
  //       req.params.deliveryId,
  //       {
  //         type: req.body.type,
  //         contentId: req.body.contentId,
  //         userId: req.body.userId,
  //         isSubmitted: req.body.isSubmitted,
  //         pointsRewarded: req.body.pointsRewarded,
  //       },
  //       { new: true },
  //     )
  //       .then(updatedDelivery => {
  //         if (!delivery) {
  //           return res.status(404).send({
  //             message: 'Content not found with id ' + req.params.deliveryId,
  //           });
  //         }
  //       })
  //       .catch(err => {
  //         if (err.kind === 'ObjectId') {
  //           return res.status(404).send({
  //             message: 'Content not found with id ' + req.params.deliveryId,
  //           });
  //         }
  //         return res.status(500).json({
  //           message: 'Error updating content with id ' + req.params.deliveryId,
  //         });
  //       });
  //   },
};
