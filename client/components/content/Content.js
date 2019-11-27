import React, { Component } from "react";

class Content extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        console.log(this.props)
        const style = {
            padding: "0.5rem",
            background: "rgb(160, 155, 155)",
            color: "#fff"
        }

        return (
            <div>
                <div className="grid-col-2 content-head">
                    <div>{this.props.title}</div>
                    <div>{this.props.type}</div>
                </div>
                <div style={style}>Read More >>></div>
            </div>
        )
    }
}


export default Content;