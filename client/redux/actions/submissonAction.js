const fetchDeliveryData = deliveryId => dispatch => {
  dispatch({
    type: 'FETCHING_DELIVERY_DATA_START',
  });
  fetch(`http://localhost:3000/api/v1/delivery/${deliveryId}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(res => res.json())
    .then(deliveryData =>
      dispatch({
        type: 'FETCHING_DELIVERY_DATA_SUCCESS',
        data: deliveryData,
      }),
    );
};

const createSubmission = (submissionData, cb) => dispatch => {
  dispatch({
    type: 'CREATE_NEW_SUBMISSION_START',
  });
  fetch('http://localhost:3000/api/v1/submission/new', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: submissionData,
  })
    .then(res => res.json())
    .then(submission => {
      dispatch({
        type: 'NEW_SUBMISSION_CREATED_SUCCESSFULLY',
        data: submissionData,
      }),
        cb();
    });
};

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

module.exports = { fetchSubmissionList, fetchDeliveryData, createSubmission };
