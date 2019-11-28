import React , {Component} from "react";

class Pending extends Component{
    constructor(props) {
        super(props)
    }

    render(){
        // console.log(this.props.pendingStudentData)
        const { username, email, isActive, isInCampus, isAdmin, createdAt } = this.props.pendingStudentData

        return(
            
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
                            {/* {createdAt} */}
                        </div>
                    </div>
                    <div className="pending-footer">
                        <button className="reject">X</button>
                        <button className="approve">✔</button>
                    </div>

                </div>
        )
    }
}

export default Pending;