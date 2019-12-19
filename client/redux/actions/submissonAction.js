const { updatePoints } = require('../../../utils/pointsSystem');

const fetchDeliveryData = (deliveryId, cb) => dispatch => {
  const url = `http://localhost:3000/api/v1/delivery/${deliveryId}`;
  dispatch({
    type: 'FETCHING_DELIVERY_DATA_START',
  });
  fetch(url, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(res => res.json())
    .then(deliveryData => {
      console.log(deliveryData.delivery, 'deliverdata'),
        dispatch({
          type: 'FETCHING_DELIVERY_DATA_SUCCESS',
          data: deliveryData.delivery,
        });
      cb();
    });
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
    .then(submissionData => {
      dispatch({
        type: 'NEW_SUBMISSION_CREATED_SUCCESSFULLY',
        data: submissionData,
      }),
        cb();
    }).then(
      fetch('http://localhost:3000/api/v1/student/update/points' , {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: {
          userid: submissionData.userid,
          contentid: submissionData.contentid,
        }
      })
    );
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
