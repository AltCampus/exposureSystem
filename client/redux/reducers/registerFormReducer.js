const INITIAL_STATE = {
  studentUsername: null,
  studentEmail: null,
  studentPassword: null,
};

const registerFormReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'REGISTER_PAGE_DATA':
      return {
        ...state,
        studentUsername: action.data.username,
        studentEmail: action.data.email,
        studentPassword: action.data.password,
      };
    default:
      return state;
  }
};

export default registerFormReducer;
