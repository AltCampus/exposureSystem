const studentList = {
  students: '',
};
function studentListReducer(state = studentList, action) {
  switch (action.type) {
    case 'STUDENTLIST':
      return { ...studentList, students: action.payload };
    default:
      return state;
  }
}

export default studentListReducer;
