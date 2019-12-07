import React from 'react';
import AdminSidebar from './AdminSidebar';

function AdminDashboard() {
  return (
    <>
      <div className="wrapper grid-dashboard">
        <div>
          <AdminSidebar />
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;
