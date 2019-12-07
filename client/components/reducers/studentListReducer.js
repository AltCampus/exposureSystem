  const studentList = {
  students: ""
};
function studentListReducer(state = studentList, action) {
  switch (action.type) {
    case "STUDENT_LIST":
      return { ...state, students: action.payload };

    default:
      return state;
  }
}

export default studentListReducer;
