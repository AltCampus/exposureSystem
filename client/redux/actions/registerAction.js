const registerStudent = (studentData, cb) => {
  // console.log(studentData, 'studentdata');
  // fetch('http://localhost:3000/api/v1/student/register', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: studentData,
  // }).catch(err => res.json(err));
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
