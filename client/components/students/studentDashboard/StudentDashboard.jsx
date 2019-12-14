import React, { Component } from 'react';
import { connect } from 'react-redux';
import StudentSidebar from './StudentSidebar';
import StudentSubmissionCard from './StudentSubmissionCard';
import fetchSubmissionList from '../../../redux/actions/submissonAction';

class StudentDashboard extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    // submissionList: this.props.submissionReducer.submissionList,
  };

  componentDidMount() {
    // this.props.fetchSubmissionList();
  }

  render() {
    return (
      <div className="wrapper grid-dashboard">
        <StudentSidebar />
        <div>
          {/* {this.state.submissionList &&
            this.state.submissionList.map(submission => {
              <StudentSubmissionCard submission={submission} />;
            })} */}
          <StudentSubmissionCard />
          <StudentSubmissionCard />
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return store;
};

export default connect(mapStateToProps, { fetchSubmissionList })(
  StudentDashboard,
);
