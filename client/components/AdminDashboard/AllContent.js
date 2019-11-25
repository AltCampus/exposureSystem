import React , {Component} from "react";
import AdminSidebar from "./AdminSidebar";

class AllContents extends Component{
    render(){
        return(
            <div className="wrapper grid-dashboard">
                <AdminSidebar />
                <h3>List of Content.</h3>
            </div>
        )
    }
}

export default AllContents;