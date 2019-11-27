import React, { Component } from "react";
import AdminSidebar from "./AdminSidebar";
<<<<<<< HEAD:client/components/adminDashboard/PendingApprovals.js
import Pending from "./PendingCard";
class PendingApprovals extends Component{
    render(){
        return(
            <>
                <div className="wrapper grid-dashboard">
                    <AdminSidebar />
                    <div>
                        <h3 className="flex-center" style={{color : "rgb(59, 57, 57)"}}>Pending Approvals</h3>
                        <div className="grid-col-3">
                            <Pending />
                            <Pending />
                            <Pending />
                        </div>
                    </div>
                    
                </div>
            </>
        )
    }
=======
import PendingCard from "../PendingCard";
class PendingApprovals extends Component {
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
              <PendingCard />
              <PendingCard />
              <PendingCard />
            </div>
          </div>
        </div>
      </>
    );
  }
>>>>>>> integration:client/components/AdminDashboard/PendingApprovals.js
}

export default PendingApprovals;
