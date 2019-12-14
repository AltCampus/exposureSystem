const INITIAL_STATE = {
  submissionList: null,
  isLoadingSubmissionList: false,
};

const submissionReducer = (state = INITIAL_STATE, action) => {
  switch (action) {
    case 'FETCHING_SUBMISSION_LIST_START':
      return {
        ...state,
        isLoadingSubmissionList: true,
      };
    case 'FETCHING_SUBMISSION_LIST_SUCCESS':
      return {
        ...state,
        isLoadingSubmissionList: false,
        submissionList: action.data,
      };
    default:
      return state;
  }
};

export default submissionReducer;
