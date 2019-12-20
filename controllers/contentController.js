const Content = require('../models/contentSchema');

module.exports = {
  newContent: (req, res) => {
    const content = new Content(req.body);
    content
      .save()
      .then(data => {
        console.log(data, 'content data');
        res.send(data);
      })
      .catch(err => {
        res.status(500).json({
          message:
            err.message ||
            'Some error occurred while creating the Content piece.',
        });
      });
  },

  findAllContent: (req, res) => {
    Content.find()
      .then(contents => {
        res.json({ contents });
      })
      .catch(err => {
        res.status(500).json({
          message:
            err.message || 'Some error occurred while retrieving content.',
        });
      });
  },

  findOneContent: (req, res) => {
    Content.findById(req.params.contentId)
      .then(content => {
        if (!content) {
          return res.status(404).send({
            message: `Content not found with id ${req.params.contentId}`,
          });
        }
        res.json({ content });
      })
      .catch(err => {
        if (err.kind === 'ObjectId') {
          return res.status(404).send({
            message: `Content not found with id ${req.params.contentId}`,
          });
        }
        return res.status(500).json({
          message: `Error retrieving content with id ${req.params.contentId}`,
        });
      });
  },

  updateContent: (req, res) => {
    Content.findByIdAndUpdate(
      req.body.id,
      {
        type: req.body.type,
        contentUrl: req.body.contentUrl,
        title: req.body.title,
        description: req.body.description,
      },
      { new: true },
    )
      .then(content => {
        if (!content) {
          return res.status(404).send({
            message: `Content not found with id ${req.params.contentId}`,
          });
        }
      })
      .catch(err => {
        if (err.kind === 'ObjectId') {
          return res.status(404).send({
            message: `Content not found with id ${req.params.contentId}`,
          });
        }
        return res.status(500).json({
          message: `Error updating content with id ${req.params.contentId}`,
        });
      });
  },

  deleteContent: (req, res) => {
    console.log(req.body, 'in delete controller');
    // Content.findByIdAndRemove(req.body.id)
    //   .then(content => {
    //     if (!content) {
    //       return res.status(404).json({
    //         message: `Content not found with id ${req.params.contentId}`,
    //       });
    //     }
    //     res.json({ message: 'Content deleted successfully!' });
    //   })
    //   .catch(err => {
    //     if (err.kind === 'ObjectId' || err.name === 'NotFound') {
    //       return res.status(404).send({
    //         message: `Content not found with id ${req.params.contentId}`,
    //       });
    //     }
    //     return res.status(500).json({
    //       message: `Could not delete content with id ${req.params.contentId}`,
    //     });
    //   });
    Content.findByIdAndDelete(id, (error, content) => {
      if (error) return next(error);
      return res.status(200).json({ student });
    });
  },
};
