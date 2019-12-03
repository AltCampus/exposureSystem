import React, { Component } from "react";

class Student extends Component {

    render() {
        return (
            <div className="student-card">
                <div className="sidebar-heading flex-center">username</div>
                <div className="student-details">
                    <div>
                        <div className="student-pfp">

                        </div>
                    </div>
                    <div>Details:
                        username
                        email
                    
                    </div>
                </div>
                <div className="student-footer">Created at: </div>

            </div>
        )
    }
}

export default Student;