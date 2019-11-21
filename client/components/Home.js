import React from "react";
import "../assets/stylesheets/style.css";
import Header from "./Header";
// import Login from "./Login";
// import AdminLogin from "./AdminLogin";
import SignUp from "./SignUp";

class Home extends React.Component {
  render() {
    return (
      // <div style={{ textAlign: "center" }}>
      //   <h1>Hello World</h1>
      // </div>

      <>
        <Header />
        <SignUp />
      </>
    );
  }
}

export default Home;
