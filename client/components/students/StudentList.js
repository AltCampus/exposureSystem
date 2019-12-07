import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminSidebar from '../adminDashboard/AdminSidebar';
import { studentList } from '../actions/studentListAction';
import StudentCard from './StudentCard';

class StudentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentList: '',
    };
  }

  componentDidMount() {
    this.props.allStudents();
  }
  render() {
    return (
      <div className="wrapper grid-dashboard">
        <AdminSidebar />
        <div>
          <h3 className="flex-center" style={{ color: 'rgb(59, 57, 57)' }}>
            Students
          </h3>
          <div className="grid-col-3">
            {this.state.studentList &&
              this.state.studentList.map((student, i) => {
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
export default connect(mapStateToProps, { studentList })(StudentList);
