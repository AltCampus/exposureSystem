import React, { Component } from 'react';

class Pending extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {username, email, isInCampus, createdAt } = this.props.pendingStudent
    console.log(this.props)
    return (

      <div className="student-card">
        <div className="card-heading flex-center">{username}</div>
        <div className="card-details">
          <div>
            <div className="student-pfp" />
          </div>
          <div>
            Details:
            {email}
            {/* {createdAt} */}
          </div>

        </div>
        <div className="pending-footer">
          <button className="reject">X</button>
          <button className="approve">✔</button>
        </div>
      </div>
    );
  }
}

export default Pending;
