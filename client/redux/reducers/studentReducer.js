const INITIAL_STATE = {
  studentData: null,
  isLoggingIn: false,
};

const studentReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'STUDENT_LOGIN_START':
      return {
        ...state,
        isLoggingIn: true,
      };
    case 'STUDENT_LOGIN_SUCCESS':
      return {
        ...state,
        isLoggingIn: false,
        studentData: action.data,
      };
    default:
      return state;
  }
};

export default studentReducer;
