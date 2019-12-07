export const studentList = () => {
  return dispatch => {
    fetch('/api/v1/users/all', {
      headers: {
        Authorization: `${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(data => {
        dispatch({ type: 'STUDENT_LIST', payload: data });
      });
  };
};
