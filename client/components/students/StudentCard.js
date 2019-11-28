import React, { Component } from "react";

class Student extends Component {

    render() {
        const { username, email, isActive, isInCampus, isAdmin, createdAt } = this.props.studentData
        console.log(this.props.studentData.username)
        return (
            <div className="student-card">
                <div className="sidebar-heading flex-center">{username}</div>
                <div className="student-details">
                    <div>
                        <div className="student-pfp">

                        </div>
                    </div>
                    <div>Details:
                        {email}
                        {isInCampus}
                        {isActive}
                        {isAdmin}
                    </div>
                </div>
                <div className="student-footer">Created at:{createdAt} </div>

            </div>
        )
    }
}

export default Student;