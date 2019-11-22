import React , {Component} from "react";
import { Route , NavLink } from "react-router-dom";
import AllContents from "./AllContent";
import AddContent from "./AddContent";
import Students from "./Students";
import PendingApprovals from "./PendingApprovals";

class AdminSidebar extends Component{
    render(){
        return(
            <>
                <div >

                <NavLink to="/allcontent">All Contents</NavLink>
                <NavLink to="/addcontent">Add Content</NavLink>
                <NavLink to="/students">Students</NavLink>
                <NavLink to="/pendingapprovals">Pending Approvals</NavLink>
                </div>
            </>
        )
    }
}


export default AdminSidebar;