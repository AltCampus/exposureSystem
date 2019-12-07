import React from 'react';
// TODO : MAKE IT AS WHEN CLICKED ON THE CARD IT OPENS THE ORIGINAL ARTICLE
function StudentSubmissionCard() {
  return (
    <div className="wrapper flex-column">
      <div className="flex-column">
        <h5 className="card-heading flex-center">Title</h5>
        <h5 className="card-details">Submitted Summary:</h5>
        <div className="card-footer">Created at:</div>
      </div>
    </div>
  );
}

export default StudentSubmissionCard;
