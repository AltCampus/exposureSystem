import React from "react";
import Login from "./Login";
import AdminLogin from "./AdminLogin";
import "../assets/stylesheets/style.css";

class Home extends React.Component {
  render() {
    return (
      // <div style={{ textAlign: "center" }}>
      //   <h1>Hello World</h1>
      // </div>

      <>
        <Login />
      </>
    );
  }
}

export default Home;
