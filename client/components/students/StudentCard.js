import React, { Component } from "react";

class Student extends Component {

    render() {
        const { username, email, createdAt } = this.props.student
        return (
            <div className="student-card">
                <div className="sidebar-heading flex-center">{username}</div>
                <div className="student-details">
                    <div>
                        <div className="student-pfp">

                        </div>
                    </div>
                    <div>
                        {email}
                        {/* {createdAt} */}
                    </div>
                </div>
                <div className="student-footer">Created at: </div>

            </div>
        )
    }
}

export default Student;