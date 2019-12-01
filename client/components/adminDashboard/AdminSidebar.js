import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
// import AllContents from "../content/ContentList";
// import NewContentForm from "../content/NewContentForm";
// import Students from "../students/Students";
// import PendingApprovals from "./PendingApprovals";

class AdminSidebar extends Component {
  render() {
    return (
      <>
        <div className="flex-column flex-center sidebar">
          <div className="sidebar-heading flex-center">Quick Access</div>
          <NavLink
            className="dash-link"
            activeClassName="active"
            to="/content/list" //changed from /allcontent
          >
            All Contents
          </NavLink>
          <NavLink
            className="dash-link"
            activeClassName="active"
            to="/content/new" //changed from /addcontent
          >
            Add Content
          </NavLink>
          <NavLink activeClassName="active" to="/students">
            Students
          </NavLink>
          <NavLink
            className="dash-link"
            activeClassName="active"
            to="/pendingapprovals"
          >
            Pending Approvals
          </NavLink>
        </div>
      </>
    );
  }
}

export default AdminSidebar;
