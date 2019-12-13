import React, { Component } from 'react';
import AdminSidebar from '../adminDashboard/AdminSidebar';
import { connect } from 'react-redux';
import { fetchStudentList } from '../../redux/actions/studentAction';

import StudentCard from './StudentCard';

class StudentList extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    studentList: this.props.adminReducer.studentList,
  };

  componentDidMount() {
    this.props.fetchStudentList();
  }

  render() {
    const studentList = this.state.studentList;
    console.log('inside student list component');
    return (
      <div className="wrapper grid-dashboard">
        <AdminSidebar />
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
const mapStateToProps = state => {
  return state;
};
export default connect(mapStateToProps, { fetchStudentList })(StudentList);
