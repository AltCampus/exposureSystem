import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminSidebar from './AdminSidebar';
import PendingCard from './PendingCard';
import { fetchPendingApprovalList } from '../../redux/actions/adminAction';
import { approveStudent, removeStudent } from '../../redux/actions/adminAction';

import { Table, Divider } from 'antd';
const { Column, ColumnGroup } = Table;

class PendingApprovals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // pendingStudentList: this.props.adminReducer.pendingStudentList.value,
    };
  }

  handleReject = id => {
    this.props.removeStudent(id, this.cb);
  };

  handleApprove = id => {
    // console.log(id, 'inhandleaprrove');
    this.props.approveStudent(id, this.cb);
  };

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
  // this.props.history.push('/admin/pending-approvals');

  // };
  render() {
    const pendingStudentList =
      this.props.adminReducer.pendingStudentList &&
      this.props.adminReducer.pendingStudentList.pendingStudents;
    console.log(this.props);
    console.log(pendingStudentList, 'psl');

    const id =
      this.props.adminReducer.pendingStudentList.pendingStudents &&
      this.props.adminReducer.pendingStudentList.pendingStudents.id;
    console.log(id, 'id');

    return (
      <>
        <div className='wrapper'>
          <div>
            <AdminSidebar />
          </div>
          <div>
            <h3 className='flex-center heading'>Pending Approvals</h3>
            {/* <div className='grid-col-3'>
              {studentList &&
                studentList.pendingStudents &&
                studentList.pendingStudents.map((Student, i) => (
                  <PendingCard key={i} pendingStudent={Student} />
                ))}
            </div> */}
            <Table bordered dataSource={pendingStudentList}>
              <ColumnGroup>
                <Column
                  width='20%'
                  title='Username'
                  dataIndex='username'
                  key='username'
                />
                <Column
                  width='55%'
                  title='Email'
                  dataIndex='email'
                  key='email'
                />
                <Column
                  width='10%'
                  title='Is In Campus'
                  dataIndex='isInCampus'
                  key='isInCampus'
                  render={(text, record) => {
                    return console.log(text);
                    <span>{text ? 'Yes' : 'No'}</span>;
                  }}
                />

                <Column
                  title='Action'
                  key='action'
                  render={(text, record) => (
                    <span>
                      <a onClick={() => this.handleApprove(record._id)}>
                        Approve
                      </a>
                      <Divider type='vertical' />
                      <a onClick={() => this.handleReject(record._id)}>
                        Reject
                      </a>
                    </span>
                  )}
                />
              </ColumnGroup>
            </Table>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, {
  fetchPendingApprovalList,
  approveStudent,
  removeStudent,
})(PendingApprovals);
