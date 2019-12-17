const INITIAL_STATE = {
  submissionList: null,
  isLoadingSubmissionList: false,
  deliveryData: null,
  isFetchingDeliveryData: false,
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
    case 'FETCHING_DELIVERY_DATA_START':
      return {
        ...state,
        isFetchingDeliveryData: true,
      };
    case 'FETCHING_DELIVERY_DATA_SUCCESS':
      return {
        ...state,
        isFetchingDeliveryData: false,
        deliveryData: action.data,
      };
    default:
      return state;
  }
};

export default submissionReducer;
