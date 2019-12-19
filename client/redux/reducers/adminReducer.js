const INITIAL_STATE = {
  adminData: '',
  isAdminLogginIn: false,
  isAdminLoggedIn: false,
  content: null,
  isCreatingContent: false,
  contentList: null,
  isLoadingContentList: false,
  studentList: null,
  isLoadingStudentList: false,
  pendingStudentList: {},
  isLoadingPendingStudentList: false,
};

function adminReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADMIN_LOGIN_START':
      return {
        ...state,
        isAdminLogginIn: true,
      };
    case 'ADMIN_LOGIN_SUCCESS':
      console.log('INSIDE REDUCER', action)
      return {
        ...state,
        isAdminLogginIn: false,
        isAdminLoggedIn: true,
        adminData: action.data.admin,
      };
    case 'CREATE_CONTENT_START':
      return {
        ...state,
        isCreatingContent: true,
      };
    case 'CREATE_CONTENT_SUCCESS':
      return {
        ...state,
        isCreatingContent: false,
        content: action.data,
      };
    case 'FETCHING_CONTENT_LIST_START':
      return {
        ...state,
        isLoadingContentList: true,
      };
    case 'FETCHING_CONTENT_LIST_SUCCESS':
      return {
        ...state,
        isLoadingContentList: false,
        contentList: action.data,
      };
    case 'FETCHING_STUDENT_LIST_START':
      return {
        ...state,
        isLoadingStudentList: true,
      };
    case 'FETCHING_STUDENT_LIST_SUCCESS':
      return {
        ...state,
        isLoadingStudentList: false,
        studentList: action.data,
      };
    case 'FETCHING_PENDING_APPROVALS_START':
      return {
        ...state,
        isLoadingPendingStudentList: true,
      };
    case 'FETCHING_PENDING_APPROVALS_SUCCESS':
      return {
        ...state,
        isLoadingPendingStudentList: false,
        pendingStudentList: action.data,
      };
    case 'ADMIN_LOGOUT':
      return {
        ...state,
        adminData: '',
        isAdminLogginIn: false,
        isAdminLoggedIn: false,
        submissionList: null,
        isLoadingSubmissionList: false,
        content: null,
        isCreatingContent: false,
        contentList: null,
        isLoadingContentList: false,
        studentList: null,
        isLoadingStudentList: false,
        pendingStudentList: null,
        isLoadingPendingStudentList: false,
      };
    default:
      return state;
  }
}

export default adminReducer;
