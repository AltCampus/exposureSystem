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

const createSubmission = (submissionData, cbRoute) => dispatch => {
  console.log(submissionData, 'create submission called');
  dispatch({
    type: 'CREATE_NEW_SUBMISSION_START',
  });
  fetch('http://localhost:3000/api/v1/submission/new', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(submissionData),
  })
    .then(res => res.json())
    .then(submission => {
      console.log(submission, 'submissionData');
      dispatch({
        type: 'NEW_SUBMISSION_CREATED_SUCCESSFULLY',
        data: submission,
      });
    })
    .then(() => cbRoute());
  // .then(
  //   fetch('http://localhost:3000/api/v1/student/update/points', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: {
  //       userid: submissionData.userid,
  //       contentid: submissionData.contentid,
  //     },
  //   }).then(() => cbRoute()),
  // );
};

const fetchSubmissionList = () => dispatch => {
  dispatch({
    type: 'FETCHING_SUBMISSION_LIST_START',
  });
  fetch('http://localhost:3000/api/v1/submission/list', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('token'),
    },
  })
    .then(res => console.log(res.json(), 'res in fetchsubmission'))
    .then(submissionList => {
      console.log(submissionList, 'list I want');
      dispatch({
        type: 'FETCHING_SUBMISSION_LIST_SUCCESS',
        data: submissionList,
      });
    });
};

const fetchSingleSubmission = id => dispatch => {
  dispatch({
    type: 'FETCH_SINGLE_SUBMISSION_START',
  });
  fetch(`http://localhost:3000/api/v1/submission/${id}`)
    .then(res => res.json())
    .then(submission =>
      dispatch({
        type: 'FETCH_SINGLE_SUBMISSION_SUCCESS',
        data: submission,
      }),
    );
};

module.exports = {
  fetchSubmissionList,
  fetchDeliveryData,
  createSubmission,
  fetchSingleSubmission,
};
