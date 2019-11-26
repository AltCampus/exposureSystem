import React , {Component} from "react";

class Pending extends Component{
    render(){
        return(
            
                <div>
                    <div className="sidebar-heading flex-center">Dummy</div>
                    <div className="student-details">
                        <div>
                            <div className="student-pfp">

                            </div>
                        </div>
                        <div>Details:</div>
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