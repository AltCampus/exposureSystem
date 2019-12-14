const INITIAL_STATE = {
  studentData: null,
  isStudentLoggingIn: false,
  isStudentLoggedIn: false,
};

const studentReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'STUDENT_LOGIN_START':
      return {
        ...state,
        isStudentLoggingIn: true,
      };
    case 'STUDENT_LOGIN_SUCCESS':
      return {
        ...state,
        isStudentLoggingIn: false,
        studentData: action.data,
        isStudentLoggedIn: true,
      };
    case 'STUDENT_LOGOUT':
      return {
        ...state,
        studentData: null,
        isStudentLoggingIn: false,
        isStudentLoggedIn: false,
      };
    default:
      return state;
  }
};

export default studentReducer;
