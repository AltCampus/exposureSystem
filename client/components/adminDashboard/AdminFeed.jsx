import React from 'react';
import StudentSubmissionCard from '../students/studentDashboard/StudentSubmissionCard';
import AdminSidebar from './AdminSidebar';


function AdminFeed() {
  return (
    <>
      <div className="wrapper grid-dashboard">
        <div>
          <AdminSidebar />
        </div>
        <div className="grid-col-1">
          <StudentSubmissionCard />
          <StudentSubmissionCard />
          <StudentSubmissionCard />
        </div>
      </div>
    </>
  );
}

export default AdminFeed;
