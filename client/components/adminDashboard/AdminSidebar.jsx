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
          to="/admin/feed"
        >
          Feed
        </NavLink>
        <NavLink
          className="dash-link"
          activeClassName="active"
          to="/admin/content/list"
        >
          Content List
        </NavLink>
        <NavLink
          className="dash-link"
          activeClassName="active"
          to="/admin/content/new"
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
          to="/admin/pending-approvals"
        >
            Pending Approvals
        </NavLink>
      </div>
    </>
  );
}


export default AdminSidebar;
