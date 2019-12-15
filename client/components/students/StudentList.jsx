import React, { Component } from 'react';
import AdminSidebar from '../adminDashboard/AdminSidebar';
import { connect } from 'react-redux';
import { fetchStudentList } from '../../redux/actions/adminAction';

import StudentCard from './StudentCard';

class StudentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentList: this.props.adminReducer.studentList,
    };
  }

  componentDidMount() {
    this.props.fetchStudentList();
  }

  render() {
    const studentList =
      this.props.adminReducer.studentList &&
      this.props.adminReducer.studentList.students;
    console.log(studentList, 'inside student list component');
    return (
      <div className="wrapper grid-dashboard">
        <div>
          <AdminSidebar />
        </div>
        <div>
          <h3 className="flex-center" style={{ color: 'rgb(59, 57, 57)' }}>
            Students
          </h3>
          <div className="grid-col-3">
            {studentList &&
              studentList.map((student, i) => {
                return <StudentCard key={i} student={student} />;
              })}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = store => {
  return store;
};
export default connect(mapStateToProps, { fetchStudentList })(StudentList);
