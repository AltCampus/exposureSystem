import React , {Component} from "react";

class Student extends Component{
    render(){
        return(
            <div className="student-card">
                <div className="sidebar-heading flex-center">Dummy</div>
                <div className="student-details">
                    <div>
                        <div className="student-pfp">

                        </div>
                    </div>
                    <div>Details:</div>
                </div>
                <div className="student-footer">Created at:</div>

            </div>
        )
    }
}

export default Student;