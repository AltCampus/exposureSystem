import React, { Component } from 'react';
import { approveStudent, removeStudent } from '../../redux/actions/adminAction';
import { connect } from 'react-redux';

class PendingStudent extends Component {
  constructor(props) {
    super(props);
  }
  cb = () => {
    // this.props.history.push('/admin/pending-approvals');
    // console.log('in cb');
  };

  handleReject = id => {
    this.props.removeStudent(id, this.cb);
  };

  handleApprove = id => {
    // console.log(id, 'inhandleaprrove');
    this.props.approveStudent(id, this.cb);
  };

  render() {
    // console.log(this.props);
    const {
      username,
      email,
      isActive,
      isInCampus,
      isAdmin,
      createdAt,
    } = this.props.pendingStudent;

    const id = this.props.pendingStudent._id;
    // console.log(id, 'id');
    const token = localStorage.getItem('token');

    return (
      <div className='student-card'>
        <div className='card-heading flex-center'>Username: {username}</div>
        <div className='card-details'>
          {/* <div>
            <div className="student-pfp" />
          </div> */}
          <div>
            <span>Email: {email}</span>
            <br></br>
            <span>In Campus: {isInCampus}</span>
            {/* {createdAt} */}
          </div>
        </div>
        <div className='pending-footer'>
          <button onClick={() => this.handleReject(id)} className='reject'>
            X
          </button>
          <button onClick={() => this.handleApprove(id)} className='approve'>
            ✔
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => store;

export default connect(mapStateToProps, { approveStudent, removeStudent })(
  PendingStudent,
);
