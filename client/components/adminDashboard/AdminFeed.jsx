import React, { Component } from 'react';
import StudentSubmissionCard from '../students/studentDashboard/StudentSubmissionCard';
import AdminSidebar from './AdminSidebar';
import { fetchSubmissionList } from '../../redux/actions/submissonAction';

class AdminFeed extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    submissionList: this.props.submissionList,
  };
  componentDidMount() {
    fetchSubmissionList();
  }
  render() {
    return (
      <>
        <div className="wrapper grid-dashboard">
          <div>
            <AdminSidebar />
          </div>
          <div className="grid-col-1">
            {this.state.submissionList.map(submission => {
              <StudentSubmissionCard submission={submission} />;
            })}
          </div>
        </div>
      </>
    );
  }
}
const mapStateToProps = state => state;

export default AdminFeed;
