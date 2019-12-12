import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminSidebar from './AdminSidebar';
import PendingCard from './PendingCard';
import { fetchPendingApprovalsList } from '../../redux/actions/adminAction';

class PendingApprovals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pendingStudentList: this.props.pendingStudentList,
    };
  }

  componentDidMount() {
    fetchPendingApprovalsList();
  }

  render() {
    const pendingStudentList =
      this.state.pendingStudentList && this.state.pendingStudentList.users;
    return (
      <>
        <div className="wrapper grid-dashboard">
          <div>
            <AdminSidebar />
          </div>
          <div>
            <h3 className="flex-center" style={{ color: 'rgb(59, 57, 57)' }}>
              Pending Approvals
            </h3>
            <div className="grid-col-3">
              {pendingStudentList &&
                pendingStudentList.map(pendingStudent => <PendingCard />)}
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(PendingApprovals);
