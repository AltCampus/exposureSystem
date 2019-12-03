const Content = require("../models/contentSchema");

module.exports = {
  //TODO
  //rrestructure controller
  create: (req, res) => {
    const content = new Content(req.body);
    console.log(req.body, "inside content");

    content
      .save()
      .then(data => {
        // console.log(data, "content data")
        res.send(data);
      })
      .catch(err => {
        res.status(500).json({
          message:
            err.message ||
            "Some error occurred while creating the Content piece."
        });
      });
  },

  findAll: (req, res) => {
    Content.find()
      .then(contents => {
        res.json({ contents });
      })
      .catch(err => {
        res.status(500).json({
          message:
            err.message || "Some error occurred while retrieving content."
        });
      });
  },

  findOne: (req, res) => {
    Content.findById(req.params.contentId)
      .then(content => {
        if (!content) {
          return res.status(404).send({
            message: "Content not found with id " + req.params.contentId
          });
        }
        res.json({ content });
      })
      .catch(err => {
        if (err.kind === "ObjectId") {
          return res.status(404).send({
            message: "Content not found with id " + req.params.contentId
          });
        }
        return res.status(500).json({
          message: "Error retrieving content with id " + req.params.contentId
        });
      });
  },

  update: (req, res) => {
    // Validate Request
    //   if (!req.body.description) {
    //     return res.status(400).send({
    //       message: "Description content can not be empty"
    //     });
    //   }

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
    })
      .catch(err => {
        if (err.kind === "ObjectId") {
          return res.status(404).send({
            message: "Content not found with id " + req.params.contentId
          });
        }
        return res.status(500).json({
          message: "Error updating content with id " + req.params.contentId
        });
      });
  },

  delete: (req, res) => {
    Content.findByIdAndRemove(req.params.contentId)
      .then(content => {
        if (!content) {
          return res.status(404).json({
            message: "Content not found with id " + req.params.contentId
          });
        }
        res.json({ message: "Content deleted successfully!" });
      })
      .catch(err => {
        if (err.kind === "ObjectId" || err.name === "NotFound") {
          return res.status(404).send({
            message: "Content not found with id " + req.params.contentId
          });
        }
        return res.status(500).json({
          message: "Could not delete content with id " + req.params.contentId
        });
      });
  }
};
