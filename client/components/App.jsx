import React from "react";
import Login from './Login/Login'
import AdminLogin from "./AdminLogin/AdminLogin"

export default class App extends React.Component {
  render() {
    return (
      // <div style={{ textAlign: "center" }}>
      //   <h1>Hello World</h1>
      // </div>

      <>
      <AdminLogin />
      </>
    );
  }
}
