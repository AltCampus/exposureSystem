import React , {Component} from "react";
import Header from "../Header";
import AdminSidebar from "./AdminSidebar";

class AddContent extends Component{
    render(){
        return(
            <>
            <div className="wrapper grid-dashboard">
                <AdminSidebar />
                <form>
                    <p>Type :</p> 
                    <select>
                        <option value="resource">Resource</option>
                        <option value="challenge">Challenge</option>
                    </select>
                    <input type="text" placeholder="Content Url"></input>
                    <input type="text" placeholder="Title"></input>
                    <input type="text" placeholder="Description"></input>
                    <button>Add Content</button>
                </form>

            </div>
            
            </>
        )
    }
}


export default AddContent;