import React from 'react';
import { NavLink } from 'react-router-dom';

function StudentSidebar() {
  return (
    <div>

      <div className="flex-column flex-center sidebar">
        <div className="card-heading flex-center">Quick Access</div>
        <NavLink
          className="dash-link"
          activeClassName="active"
          to="/"
        >
        Feed
        </NavLink>
        {/* <NavLink
          className="dash-link"
          activeClassName="active"
          to="/:username/edit"
        >
        Edit Profile
        </NavLink> */}
      </div>
    </div>
  );
}

export default StudentSidebar;
