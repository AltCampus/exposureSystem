import React from "react";
import StudentSubmissionCard from "../students/studentDashboard/StudentSubmissionCard";
import AdminSidebar from "./AdminSidebar";
import Header from "../header/Header"


function AdminFeed(){
  return (
    <>
    <Header />
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
  )
}

export default AdminFeed;