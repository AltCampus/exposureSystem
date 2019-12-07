import React from 'react';
import StudentSidebar from './StudentSidebar';
import StudentSubmissionCard from './StudentSubmissionCard';

function StudentDashboard() {
  return (
    <div className="wrapper grid-dashboard">
      <StudentSidebar />
      <div>
        <StudentSubmissionCard />
        <StudentSubmissionCard />
      </div>
    </div>
  );
}

export default StudentDashboard;
