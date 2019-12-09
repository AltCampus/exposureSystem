import React, { Component } from 'react';
import AdminSidebar from './AdminSidebar';
import PendingCard from './PendingCard';
import { connect } from "react-redux"
import { pendingApprovals } from '../actions/adminAction'
import Header from "../header/Header"


class PendingApprovals extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.pendingApprovals()
  }


  render() {
    const pendingStudentList = this.props.adminReducer.pendingApprovals.users
    // console.log(pendingStudentList)
    return (
      <>
        <Header />
        <div className="wrapper grid-dashboard">
          <div>
            <AdminSidebar />
          </div>
          <div>
            <h3 className="flex-center" style={{ color: 'rgb(59, 57, 57)' }}>
              Pending Approvals
            </h3>
            <div className="grid-col-3">
              {/* {pendingStudentList &&
                pendingStudentList.map(pendingStudent => (
                  <PendingCard pendingStudentData={pendingStudent} />
                ))} */}
              {
                pendingStudentList && pendingStudentList.map(pendingStudent => {
                  return <PendingCard pendingStudent={pendingStudent} />
                })
              }
              {/* <PendingCard /> */}
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, { pendingApprovals })(PendingApprovals)


// export default PendingApprovals