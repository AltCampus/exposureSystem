import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class ContentCard extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="student-card">
                <div className="grid-col-2 content-head">
                    <div>{this.props.title}</div>
                    <div>{this.props.type}</div>
                </div>
                <div className="content-card-description">{this.props.description}:</div>
                <NavLink to={{ pathname: "/content", state: { name: "ricky" } }} className="content-link">Read More >>></NavLink>
            </div>
        )
    }
}

export default ContentCard;