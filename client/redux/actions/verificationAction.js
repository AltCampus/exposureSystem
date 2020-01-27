verifyUser = () => {
    //TODO Store user/admin in reducer
    fetch('http://localhost:3000/api/v1/admin/me', {
      method: 'GET',
      headers: {
        authorization: localStorage.token,
        'content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(admin => {
        if (admin) {
          this.setState({
            user: admin,
          });
        } else {
          fetch('http://localhost:3000/api/v1/students/me', {
            method: 'GET',
            headers: {
              authorization: localStorage.token,
              'content-Type': 'application/json',
            },
          })
            .then(res => res.json())
            .then(student => {
              this.setState({
                user: student,
              });
            });
        }
      });
  };


  module.export = {verifyUser};