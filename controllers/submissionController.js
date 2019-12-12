const Submission = require('../models/submissionSchema');

module.exports = {
  newSubmission: (req, res) => {
    const submission = new Submission(req.body);
    console.log(req.body, 'inside submission');

    submission
      .save()
      .then((data) => {
        res.status(200).json({ data });
      })
      .catch((err) => {
        res.status(500).json({
          message:
            err.message || 'Some error occurred while creating submission',
        });
      });
  },

  findAllSubmission: (req, res) => {
    Submission.find()
      .then((submissions) => {
        console.log(submissions, 'submissionController');
        res.json({ submissions });
      })
      .catch((err) => {
        res.status(500).json({
          message:
            err.message || 'Some error occurred while retrieving submissions.',
        });
      });
  },

  getOneSubmission: (req, res) => {
    const {id} = req.params;

    Submission.findById(id)
      .then((submission) => {
        if (!submission) {
          return res.status(404).send({
            message: `Submission not found with id ${  req.params.submissionId}`,
          });
        }
        res.json({ submission });
      })
      .catch((err) => {
        if (err.kind === 'ObjectId') {
          return res.status(404).send({
            message: `Submission not found with id ${  req.params.submissionId}`,
          });
        }
        return res.status(500).json({
          message:
            `Error retrieving Submission with id ${  req.params.submissionId}`,
        });
      });
  },
};
