import React, { Component } from "react";
import AdminSidebar from "./AdminSidebar";
import PendingCard from "./PendingCard";

class PendingApprovals extends Component {
  constructor() {
    super();
    this.state = {
      pendingStudentList: null
    };
  }

  componentDidMount() {
    fetch("/api/v1/admin/pending", {
      method: "GET",
      headers: {
        "Authorization": `Token ${localStorage.getItem('Admintoken')}`,
        "Content-Type": "application/json",

      } 
    })
      .then(res => res.json())
      .then(data => {
        console.log(data,"pending")
      });
  }

  render() {
    return (
      <>
        <div className="wrapper grid-dashboard">
          <AdminSidebar />
          <div>
            <h3 className="flex-center" style={{ color: "rgb(59, 57, 57)" }}>
              Pending Approvals
            </h3>
            <div className="grid-col-3">
              {/* {pendingStudentList &&
                pendingStudentList.map(pendingStudent => {
                  return <PendingCard pendingStudentData={pendingStudent} />;
                })} */}

                <PendingCard />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default PendingApprovals;
