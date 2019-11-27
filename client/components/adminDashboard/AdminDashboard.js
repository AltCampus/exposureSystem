//Importing react

import React , {Component} from "react";
import Header from "../header/Header";
import AdminSidebar from "./AdminSidebar";

//Creating dashboard component

class AdminDashboard extends Component{
    render(){
        return(
            <>
            <div className="wrapper grid-dashboard">
                <AdminSidebar />
                <div></div>
            </div>
            </>

        )
    }
}

export default AdminDashboard;
