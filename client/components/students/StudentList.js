import React, { Component } from "react";
import AdminSidebar from "../adminDashboard/AdminSidebar";
import StudentCard from "./StudentCard";

class StudentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentList: null
    };
  }
  
  componentDidMount() {
    fetch("/api/v1/users/all", {
      headers: {
        // "Authorization": `${localStorage.getItem("userToken")}`,
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      // .then(data => this.setState({ ...this.state, studentList: data }));
      .then(data => console.log(data))
  }

  render() {
    console.log(this.state && this.state.studentList)
    return (
      <div className="wrapper grid-dashboard">
        <AdminSidebar />
        <div>
          <h3 className="flex-center" style={{ color: "rgb(59, 57, 57)" }}>
            Students
          </h3>
          <div className="grid-col-3">
            {
              <StudentCard />
            }
          </div>
        </div>
      </div>
    );
  }
}

export default StudentList;
