import React , {Component} from "react";
import AdminSidebar from "./AdminSidebar";
import Student from "../Student";

class Students extends Component {
    render(){
        return(
            <div className="wrapper grid-dashboard">
                <AdminSidebar />
                <div>
                    <h3 className="flex-center" style={{color : "rgb(59, 57, 57)"}}>Students</h3>
                    <div className="grid-col-3">
                        <Student />
                        <Student />
                        <Student />
                    </div>

                </div>
            </div>
        )
    }
}

export default Students;