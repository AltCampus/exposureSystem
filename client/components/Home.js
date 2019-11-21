import React from "react";
// import Login from "./Login";
import "../assets/stylesheets/style.css";
// import AdminLogin from "./AdminLogin";
import SignUp from "./SignUp";

class Home extends React.Component {
  render() {
    return (
      // <div style={{ textAlign: "center" }}>
      //   <h1>Hello World</h1>
      // </div>

      <>
        <SignUp />
      </>
    );
  }
}

export default Home;
