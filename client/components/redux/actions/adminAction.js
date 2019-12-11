// const adminloggedIn = (adminCredentials) => (dispatch) => {
//   fetch('http://localhost:3000/api/v1/admin/login', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(adminCredentials),
//   })
//     .then((res) => res.json())
//     .then((admin) => {
//       localStorage.setItem('token', admin.Token);
//       dispatch({
//         type: 'ADMIN_LOGIN_SUCCESSFUL',
//         data: admin,
//       });
//     });
// };


// const adminLogout = () => (dispatch) => {
//   dispatch({ type: 'ADMIN_LOGOUT' });
// };

// module.exports = {ad}