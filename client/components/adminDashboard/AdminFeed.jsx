import React, { Component } from 'react';
import StudentSubmissionCard from '../students/studentDashboard/StudentSubmissionCard';
import AdminSidebar from './AdminSidebar';
import { connect } from 'react-redux';
import { fetchSubmissionList } from '../../redux/actions/submissonAction';

class AdminFeed extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    submissionList: this.props.submissionReducer.submissionList,
  };
  componentDidMount() {
    this.props.fetchSubmissionList();
  }
  render() {
    return (
      <>
        <div className="wrapper grid-dashboard">
          <div>
            <AdminSidebar />
          </div>
          <div className="grid-col-1">
            {this.state.submissionList &&
              this.state.submissionList.map(submission => {
                <StudentSubmissionCard submission={submission} />;
              })}
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = store => {
  return store;
};

export default connect(mapStateToProps, { fetchSubmissionList })(AdminFeed);
