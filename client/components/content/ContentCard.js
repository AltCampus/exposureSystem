import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class ContentCard extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        // console.log(this.props)
        return (
            <div className="student-card">
                <div className="grid-col-2 content-head">
                    <div>{this.props.contentData.title}</div>
                    <div>{this.props.contentData.type}</div>
                </div>
                <div className="content-card-description">{this.props.contentData.description}:</div>
                <NavLink to={{ pathname: "/content", contentProps: { contentData: this.props.contentData } }} className="content-link">Read More >>></NavLink>
            </div>
        )
    }
}
    
export default ContentCard;