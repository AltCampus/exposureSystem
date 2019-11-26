import React , {Component} from "react";
import AdminSidebar from "./AdminSidebar";
import Content from "../Content";

class AllContents extends Component{
    render(){
        return(
            <div className="wrapper grid-dashboard">
                <AdminSidebar />
                <div>
                    <h3 className="flex-center" style={{color : "rgb(59, 57, 57)"}}>Content</h3>
                    <div className="grid-col-3">
                        <Content />
                        <Content />
                        <Content />
                    </div>

                </div>
            </div>
        )
    }
}

export default AllContents;