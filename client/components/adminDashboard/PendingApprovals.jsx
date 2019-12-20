import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminSidebar from './AdminSidebar';
import PendingCard from './PendingCard';
import { fetchPendingApprovalList } from '../../redux/actions/adminAction';
import { approveStudent, removeStudent } from '../../redux/actions/adminAction';

import { Table, Divider } from 'antd';
import { Spin } from 'antd';

const { Column, ColumnGroup } = Table;

class PendingApprovals extends Component {
  constructor(props) {
    super(props);
  }

  handleReject = id => {
    this.props.removeStudent(id, this.cb);
  };

  handleApprove = id => {
    this.props.approveStudent(id, this.cb);
  };

  componentDidMount() {
    this.props.fetchPendingApprovalList();
  }

  cb = () => {
    this.componentDidMount();
  };

  render() {
    const pendingStudentList =
      this.props.adminReducer.pendingStudentList &&
      this.props.adminReducer.pendingStudentList.pendingStudents;

    const id =
      this.props.adminReducer.pendingStudentList.pendingStudents &&
      this.props.adminReducer.pendingStudentList.pendingStudents.id;

    return (
      <>
        <div className='wrapper'>
          <div>
            <AdminSidebar />
          </div>
          {this.props.adminReducer.isLoadingPendingStudentList ? (
            <div className='flex-center'>
              <Spin size='large' />
            </div>
          ) : (
            <div>
              <h3 className='flex-center heading'>Pending Approvals</h3>
              <Table bordered dataSource={pendingStudentList}>
                <ColumnGroup title='Student List'>
                  <Column
                    width='20%'
                    title='Username'
                    dataIndex='username'
                    key='username'
                  />
                  <Column
                    width='40%'
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
                      return <span>{record.isInCampus ? 'Yes' : 'No'}</span>;
                    }}
                  />
                  <Column
                    width='10%'
                    title='Is Active'
                    dataIndex='isActive'
                    key='isActive'
                    render={(text, record) => {
                      return <span>{record.isActive ? 'Yes' : 'No'}</span>;
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
          )}
        </div>
      </>
    );
  }
}

const mapStateToProps = store => store;

export default connect(mapStateToProps, {
  fetchPendingApprovalList,
  approveStudent,
  removeStudent,
})(PendingApprovals);
