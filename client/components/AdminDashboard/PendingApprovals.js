import React , {Component} from "react";
import AdminSidebar from "./AdminSidebar";
class PendingApprovals extends Component{
    render(){
        return(
            <>
                <div className="wrapper grid-dashboard">
                    <h1>List of all the pending student approvals.</h1>
                    <AdminSidebar />
                </div>
            </>
        )
    }
}


export default PendingApprovals;