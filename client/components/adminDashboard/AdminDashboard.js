import React, { Component } from "react";
import AdminSidebar from "./AdminSidebar";

// eslint-disable-next-line react/prefer-stateless-function
class AdminDashboard extends Component {
  render() {
    return (
      <>
        <div className="wrapper grid-dashboard">
          <AdminSidebar />
          <div></div>
        </div>
      </>
    );
  }
}

export default AdminDashboard;
