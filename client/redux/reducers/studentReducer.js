const INITIAL_STATE = {
  studentData: null,
  isStudentLoggingIn: false,
  isStudentLoggedIn: false,
  isUpdatingProfile: false,
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
    case 'STUDENT_PROFILE_UPDATE_START':
      return {
        ...state,
        isUpdatingProfile: true,
      }
    case 'STUDENT_PROFILE_UPDATE_SUCCESS':
      return {
        ...state,
        isUpdatingProfile: false,
        studentData: action.data,
      }
    default:
      return state;
  }
};

export default studentReducer;
