import React , {Component} from "react";
import AdminSidebar from "./AdminSidebar";

class Students extends Component {
    render(){
        return(
            <div className="wrapper grid-dashboard">
                <h1>List of all Students!</h1>
                <AdminSidebar />
            </div>
        )
    }
}

export default Students;