import React, { Component } from "react";
import AdminSidebar from "../adminDashboard/AdminSidebar";
import Student from "./StudentCard";

class Students extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    };
  }

  componentDidMount() {
    fetch("http:localhost:3000/users")
      .then(res => res.json())
      .then(users => {
        const response = Users.users;
        this.setState({ ...this.state, users: response });
      });
  }

  render() {
    return (
      <div className="wrapper grid-dashboard">
        <AdminSidebar />
        <div>
          <h3 className="flex-center" style={{ color: "rgb(59, 57, 57)" }}>
            Students
          </h3>
          <div className="grid-col-3">
            <ol>
              <Student />
            </ol>
          </div>
        </div>
      </div>
    );
  }
}

export default Students;
