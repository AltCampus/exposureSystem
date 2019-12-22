const Submission = require('../models/submissionSchema');

module.exports = {
  newSubmission: (req, res) => {
    console.log('inside sub controller');
    let points =
      new Date(req.body.createdAt).valueOf() + 172800 * 1000 > Date.now()
        ? 1
        : -1;
    const submission = new Submission({
      title: req.body.title,
      contentSummary: req.body.contentSummary,
      userid: req.body.userid,
      contentid: req.body.contentid,
      pointsAwarded: points,
    });

    submission
      .save()
      .then(data => {
        res.status(200).json({ data });
      })
      .catch(err => {
        console.log(err);
        res.status(400).json({
          message:
            err.message || 'Some error occurred while creating submission',
        });
      });
  },

  //todo
  //populate user and content while sending
  findAllSubmission: (req, res) => {
    // console.log('inside controller');
    // Submission.find({}, (err, submissions) => {
    //   if (err) return next(err);
    //   return res.status(200).json({ submissions });
    // });
    Submission.find()
      .populate('contentid')
      .populate('student')
      .then(submissions => {
        console.log(submissions, 'submissionController');
        res.json({ submissions });
      })
      .catch(err => {
        res.status(500).json({
          message:
            err.message || 'Some error occurred while retrieving submissions.',
        });
      });
  },

  getOneSubmission: (req, res) => {
    const { id } = req.params;

    Submission.findById(id)
      .then(submission => {
        if (!submission) {
          return res.status(404).json({
            message: `Submission not found with id ${req.params.submissionId}`,
          });
        }
        res.json({ submission });
      })
      .catch(err => {
        if (err.kind === 'ObjectId') {
          return res.status(404).json({
            message: `Submission not found with id ${req.params.submissionId}`,
          });
        }
        return res.status(500).json({
          message: `Error retrieving Submission with id ${req.params.submissionId}`,
        });
      });
  },
};
