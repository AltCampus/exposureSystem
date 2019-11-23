const Content = require("../models/contentSchema");

module.exports = {
  create: (req, res) => {
    // Create content

    const content = new Content(req.body);

    console.log(content);

    // Save content in the database
    content
      .save()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message ||
            "Some error occurred while creating the Content piece."
        });
      });
  },

  ///////////////////////
  // Retrieve and return all content from the database.
  findAll: (req, res) => {
    Content.find()
      .then(contents => {
        res.send(contents);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving content."
        });
      });
  },

  //////////////////////
  // Find a single content with a contentId
  findOne: (req, res) => {
    Content.findById(req.params.contentId)
      .then(content => {
        if (!content) {
          return res.status(404).send({
            message: "Content not found with id " + req.params.contentId
          });
        }
        res.send(content);
      })
      .catch(err => {
        if (err.kind === "ObjectId") {
          return res.status(404).send({
            message: "Content not found with id " + req.params.contentId
          });
        }
        return res.status(500).send({
          message: "Error retrieving content with id " + req.params.contentId
        });
      });
  },

  /////////////////////
  // Update a content identified by the contentId in the request
  update: (req, res) => {
    // Validate Request
    //   if (!req.body.description) {
    //     return res.status(400).send({
    //       message: "Description content can not be empty"
    //     });
    //   }

    // Find content and update it with the request body
    Content.findByIdAndUpdate(
      req.params.contentId,
      {
        type: req.body.type,
        contentUrl: req.body.contentUrl,
        title: req.body.title || "Untitled",
        description: req.body.description
      },
      { new: true }
    )
      .then(content => {
        if (!content) {
          return res.status(404).send({
            message: "Content not found with id " + req.params.contentId
          });
        }
        res.send(content);
      })
      .catch(err => {
        if (err.kind === "ObjectId") {
          return res.status(404).send({
            message: "Content not found with id " + req.params.contentId
          });
        }
        return res.status(500).send({
          message: "Error updating content with id " + req.params.contentId
        });
      });
  },

  /////////////////////
  // Delete content with the specified contentId in the request
  delete: (req, res) => {
    Content.findByIdAndRemove(req.params.contentId)
      .then(content => {
        if (!content) {
          return res.status(404).send({
            message: "Content not found with id " + req.params.contentId
          });
        }
        res.send({ message: "Content deleted successfully!" });
      })
      .catch(err => {
        if (err.kind === "ObjectId" || err.name === "NotFound") {
          return res.status(404).send({
            message: "Content not found with id " + req.params.contentId
          });
        }
        return res.status(500).send({
          message: "Could not delete content with id " + req.params.contentId
        });
      });
  }
};

// /////////////////////////////////////////////////////////////////////////////////////////////
// // Create and Save a new content
// exports.create = (req, res) => {
//   // Create content

//   const content = new Content(req.body);
//   // const content = new Content({
//   //   type: req.body.type,
//   //   contentUrl: req.body.contentUrl,
//   //   title: req.body.title || "Untitled",
//   //   description: req.body.description
//   // });
//   console.log(content);

//   // Save content in the database
//   content
//     .save()
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while creating the Content piece."
//       });
//     });
// };

// ///////////////////////
// // Retrieve and return all content from the database.
// exports.findAll = (req, res) => {
//   Content.find()
//     .then(contents => {
//       res.send(contents);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message: err.message || "Some error occurred while retrieving content."
//       });
//     });
// };

// //////////////////////
// // Find a single content with a contentId
// exports.findOne = (req, res) => {
//   Content.findById(req.params.contentId)
//     .then(content => {
//       if (!content) {
//         return res.status(404).send({
//           message: "Content not found with id " + req.params.contentId
//         });
//       }
//       res.send(content);
//     })
//     .catch(err => {
//       if (err.kind === "ObjectId") {
//         return res.status(404).send({
//           message: "Content not found with id " + req.params.contentId
//         });
//       }
//       return res.status(500).send({
//         message: "Error retrieving content with id " + req.params.contentId
//       });
//     });
// };

// /////////////////////
// // Update a content identified by the contentId in the request
// exports.update = (req, res) => {
//   // Validate Request
//   //   if (!req.body.description) {
//   //     return res.status(400).send({
//   //       message: "Description content can not be empty"
//   //     });
//   //   }

//   // Find content and update it with the request body
//   Content.findByIdAndUpdate(
//     req.params.contentId,
//     {
//       type: req.body.type,
//       contentUrl: req.body.contentUrl,
//       title: req.body.title || "Untitled",
//       description: req.body.description
//     },
//     { new: true }
//   )
//     .then(content => {
//       if (!content) {
//         return res.status(404).send({
//           message: "Content not found with id " + req.params.contentId
//         });
//       }
//       res.send(content);
//     })
//     .catch(err => {
//       if (err.kind === "ObjectId") {
//         return res.status(404).send({
//           message: "Content not found with id " + req.params.contentId
//         });
//       }
//       return res.status(500).send({
//         message: "Error updating content with id " + req.params.contentId
//       });
//     });
// };

// /////////////////////
// // Delete content with the specified contentId in the request
// exports.delete = (req, res) => {
//   Content.findByIdAndRemove(req.params.contentId)
//     .then(content => {
//       if (!content) {
//         return res.status(404).send({
//           message: "Content not found with id " + req.params.contentId
//         });
//       }
//       res.send({ message: "Content deleted successfully!" });
//     })
//     .catch(err => {
//       if (err.kind === "ObjectId" || err.name === "NotFound") {
//         return res.status(404).send({
//           message: "Content not found with id " + req.params.contentId
//         });
//       }
//       return res.status(500).send({
//         message: "Could not delete content with id " + req.params.contentId
//       });
//     });
// };
