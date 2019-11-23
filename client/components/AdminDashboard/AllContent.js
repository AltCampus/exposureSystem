import React , {Component} from "react";
import AdminSidebar from "./AdminSidebar";

class AllContents extends Component{
    render(){
        return(
            <div className="wrapper grid-dashboard">
                <h1>List of all Content.</h1>
                <AdminSidebar />
            </div>
        )
    }
}

export default AllContents;