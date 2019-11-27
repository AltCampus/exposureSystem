import React , {Component} from "react";
import {NavLink} from "react-router-dom";

class ContentCard extends Component{
    render(){
       
        return(
            <div className="student-card">
                <div className="grid-col-2 content-head">
                    <div>Title</div>
                    <div>Type</div>
                </div>
                <div className="content-card-description">Description:</div>
                <NavLink to="/content" className="content-link">Read More >>></NavLink>
            </div>
        )
    }
}


export default ContentCard;