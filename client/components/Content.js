import React , {Component} from "react";

class Content extends Component{
    render(){
        const style = {
            padding: "0.5rem" , 
            background : "rgb(160, 155, 155)" , 
            color : "#fff"
        }
        return(
            <div>
                <div className="grid-col-2 content-head">
                    <div>Title</div>
                    <div>Type</div>
                </div>
                <div style={style}>Read More >>></div>
            </div>
        )
    }
}


export default Content;