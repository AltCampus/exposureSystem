const fetchSubmissionList = () => dispatch => {
  dispatch({
    type: 'FETCHING_SUBMISSION_LIST_START',
  });
  fetch('http://localhost:3000/api/v1/submission/list')
    .then(res => res.json())
    .then(submissionList =>
      dispatch({
        type: 'FETCHING_SUBMISSION_LIST_SUCCESS',
        data: submissionList,
      }),
    );
};

const submitSubmission = () => dispatch => {
  dispatch({
    type: 'SUBMISSION_SUBMIT_START',
  });
};

module.exports = { fetchSubmissionList };
