import React , {Component} from "react";

class Content extends Component{
    render(){
        return(
            <div className="wrapper">
                <div className="sidebar-heading flex-center">Title</div>
                <div className="grid-col-2">
                    <div className="submission-head flex-center">
                        <div>Description:</div>
                    </div>
                    <div className="submission-head flex-center">
                        <div>Submissions:</div>                   
                        <div>Type:</div>
                    </div>
                </div>
                <iframe className="article" src="https://en.wikipedia.org/wiki/Der_Ring_des_Nibelungen"></iframe>
                <div className="flex-end ">
                    
                    <button className="content-button">Edit</button>
                    <button className="content-button">Delete</button>
                   
                </div>
            </div>
        )
    }
}


export default Content;