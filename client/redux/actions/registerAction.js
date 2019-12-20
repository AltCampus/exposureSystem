const registerStudent = (studentData, cb) => {
  fetch('/api/v1/student/register', {
    method: 'POST',
    body: JSON.stringify(studentData),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(res => res.json())
    .then(user => {
      console.log(user, 'final user');
    });
  cb();
};

module.exports = registerStudent;
