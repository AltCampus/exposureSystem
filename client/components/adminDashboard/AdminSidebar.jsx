import React from 'react';
import { NavLink } from 'react-router-dom';

function AdminSidebar() {
  return (
    <>
      <div className="flex-column flex-center sidebar">
        <div className="card-heading flex-center">Quick Access</div>
        <NavLink
          className="dash-link"
          activeClassName="active"
          to="/admin"
        >
          Feed
        </NavLink>
        <NavLink
          className="dash-link"
          activeClassName="active"
          to="/content/list"
        >
          Contents
        </NavLink>
        <NavLink
          className="dash-link"
          activeClassName="active"
          to="/content/new"
        >
            Create Content
        </NavLink>
        <NavLink
          className="dash-link"
          activeClassName="active"
          to="/admin/students"
        >
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


export default AdminSidebar;
