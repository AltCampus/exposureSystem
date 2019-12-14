import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminSidebar from './AdminSidebar';
import PendingCard from './PendingCard';
import { fetchPendingApprovalList } from '../../redux/actions/adminAction';

class PendingApprovals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // pendingStudentList: this.props.adminReducer.pendingStudentList.value,
    };
  }

  componentDidMount() {
    this.props.fetchPendingApprovalList();
    // this.cb();
    // this.setState({
    //   pendingStudentList: this.props.adminReducer.pendingStudentList,
    // });
  }

  // cb = () => {
  //   console.log('inside cb');
  //   this.setState({
  //     pendingStudentList: this.props.adminReducer.pendingStudentList,
  //   });
  // };
  render() {
    // console.log(this.props.adminReducer.pendingStudentList, 'props');
    // const something = this.props.adminReducer.pendingStudentList;
    // console.log(something, 'some');
    const StudentList = this.props.adminReducer.pendingStudentList;
    console.log(StudentList);

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
              {StudentList &&
                StudentList.pendingStudents &&
                StudentList.pendingStudents.map(Student => (
                  <PendingCard pendingStudent={Student} />
                ))}
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, { fetchPendingApprovalList })(
  PendingApprovals,
);
