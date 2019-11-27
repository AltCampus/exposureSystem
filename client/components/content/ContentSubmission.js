import React , {Component} from "react";


class ContentSubmission extends Component{
    constructor(){
        super();
        this.state = {

        }
    }
    render(){
        
        return(
            <div className="wrapper">
                <div className="sidebar-heading flex-center">Title</div>
                <div className="grid-col-2">
                    <div className="submission-head flex-center">
                        <div>Description:</div>
                    </div>
                    <div className="submission-head flex-center">
                        <div>Assigned to:</div>
                        <div>Paired with:</div>
                        <div>Type:</div>
                        <div>Due by:</div>
                    </div>
                </div>
                <iframe className="article" src="https://en.wikipedia.org/wiki/Der_Ring_des_Nibelungen"></iframe>
                <div className="flex-center">
                    <textarea minLength="300" maxLength="1000" className="summary input" placeholder="Summarize the above article in your words"></textarea>
                </div>
                <div style={{display:"flex" , justifyContent:"flex-end" , marginRight:"14rem"}}>
                    <button className="button">Submit</button>
                </div>
            </div>
        )
    }
}

export default ContentSubmission