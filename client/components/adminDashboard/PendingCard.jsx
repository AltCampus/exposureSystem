import React, { Component } from 'react';
import { approveStudent, removeStudent } from '../../redux/actions/adminAction';
import { connect } from 'react-redux';

class PendingStudent extends Component {
  constructor(props) {
    super(props);
  }
  cb () {
    this.history.push('https:/localhost:3000/admin/pending-approvals');
  };

  handleReject () {
    removeStudent(id , token , cb);
  };

  handleApprove () {
    approveStudent(id , token , cb);
  };

  render() {
    // console.log(this.props.pendingStudentData)
    const {
      username, email, isActive, isInCampus, isAdmin, createdAt
    } = this.props.pendingStudent;

    const id = this.props.pendingStudent._id;
    const token = localStorage.getItem(token);


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
            {isInCampus}
            {/* {createdAt} */}
          </div>
        </div>
        <div className="pending-footer">
          <button onClick={removeStudent} className="reject">
            X
          </button>
          <button onClick={approveStudent} className="approve">
            ✔
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, { approveStudent, removeStudent })(
  PendingStudent,
);
