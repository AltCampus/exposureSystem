const registerStudent = ( studentData , cb ) => {
  fetch('https://localhost:30000/api/v1/student/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: studentData,
  });
  cb();
};
