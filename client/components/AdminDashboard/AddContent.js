import React , {Component} from "react";
import Header from "../Header";
import AdminSidebar from "./AdminSidebar";

class AddContent extends Component{
    render(){
        return(
            <>
            <div className="wrapper grid-dashboard">
                <form className="flex-column flex-center card">
                    

                    <select className="input input-select">
                        <option selected disabled>Type </option>
                        <option className="input" value="resource">Resource</option>
                        <option className="input" value="challenge">Challenge</option>
                    </select>
                    
                    <input className="input" type="text" placeholder="Content Url"></input>
                    <input className="input" type="text" placeholder="Title"></input>
                    <textarea className="input" type="text" placeholder="Description"></textarea>
                    <button className="button">Add Content</button>
                </form>
                <AdminSidebar />

            </div>
            
            </>
        )
    }
}


export default AddContent;