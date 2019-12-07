import React from 'react';
import { NavLink } from "react-router-dom";
// TODO : MAKE IT AS WHEN CLICKED ON THE CARD IT OPENS THE ORIGINAL ARTICLE + SUBMISSION (GET)
function StudentSubmissionCard() {
  return (
    // <NavLink>
      <div className="wrapper flex-column">
        <div className="flex-column">
          <h5 className="card-heading flex-center">Title</h5>
          <h5 className="card-details">Submitted Summary:</h5>
          <div className="card-footer">Created at:</div>
        </div>
      </div>
    // </NavLink>
  );
}

export default StudentSubmissionCard;
