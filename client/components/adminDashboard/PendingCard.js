import React, { Component } from 'react';

class Pending extends Component {
  constructor(props) {
    super(props);
  }

  // handleApproveStudent = () => {
  //   console.log("inside handleApproveStudent")
  //   fetch(`api/v1/admin/approved/${this.props.pendingStudent._id}`)
  //     .then(res => res.json())
  //     .then(approvedStudent => console.log(approvedstudent))
  // }

  // handleRejectStudent = () => {
  //   console.log("inside handleRejectStudent")
  //   fetch(`api/v1/admin/approved/${this.props.pendingStudent._id}`)
  //   .then(res => res.json())
  //   .then(rejectedStudent => console.log(rejectedstudent))
  // }

  render() {
    const { username, email, createdAt } = this.props.pendingStudent
    // console.log(this.props)
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
            {createdAt}
          </div>
        </div>
        <div className="pending-footer">
          <button onClick={this.handleRejectStudent} className="reject">X</button>
          <button onClick={this.handleApproveStudent} className="approve">✔</button>
        </div>
      </div>
    );
  }
}

export default Pending;
