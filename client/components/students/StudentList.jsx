import React, { Component } from 'react';
import AdminSidebar from '../adminDashboard/AdminSidebar';
import { connect } from 'react-redux';
import { fetchStudentList } from '../../redux/actions/adminAction';
import { removeStudent } from '../../redux/actions/adminAction';

import StudentCard from './StudentCard';

import { Table, Divider } from 'antd';
const { Column, ColumnGroup } = Table;

class StudentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentList: this.props.adminReducer.studentList,
    };
  }
  handleReject = id => {
    this.props.removeStudent(id, this.cb);
  };

  componentDidMount() {
    this.props.fetchStudentList();
  }

  render() {
    const studentList =
      this.props.adminReducer.studentList &&
      this.props.adminReducer.studentList.students.reverse();
    console.log(studentList, 'inside student list component');
    return (
      <div className='wrapper'>
        <div>
          <AdminSidebar />
        </div>
        {/* <div>
          <h3 className='flex-center' style={{ color: 'rgb(59, 57, 57)' }}>
            Students
          </h3>
          <div className='grid-col-3'>
            {studentList &&
              studentList.map((student, i) => {
                return <StudentCard key={i} student={student} />;
              })}
          </div>
        </div> */}
        <div className='text-center'>
          <h2 className='heading text-center'>Student List</h2>
          <Table bordered dataSource={studentList}>
            <ColumnGroup>
              <Column
                width='20%'
                title='Username'
                dataIndex='username'
                key='username'
              />
              <Column width='55%' title='Email' dataIndex='email' key='email' />
              {/* <Column
                width='10%'
                title='Approval Status'
                dataIndex='isApproved'
                key='isApproved'
              /> */}

              <Column
                title='Action'
                key='action'
                render={(text, record) => (
                  <span>
                    {/* <a target='_blank' href={record.contentUrl}></a>
                    <Divider type='vertical' /> */}
                    <a onClick={() => this.handleReject(record._id)}>Delete</a>
                  </span>
                )}
              />
            </ColumnGroup>
          </Table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return store;
};
export default connect(mapStateToProps, { fetchStudentList, removeStudent })(
  StudentList,
);
