import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminSidebar from './AdminSidebar';
import PendingCard from './PendingCard';


class PendingApprovals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pendingStudentList: null,
    };
  }

  componentDidMount() {
    
  }

  render() {
    const pendingStudentList =      this.state.pendingStudentList && this.state.pendingStudentList.users;
    console.log(pendingStudentList);

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
              {pendingStudentList
                && pendingStudentList.map((pendingStudent) => (
                  <PendingCard />
                ))}
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(PendingApprovals);
