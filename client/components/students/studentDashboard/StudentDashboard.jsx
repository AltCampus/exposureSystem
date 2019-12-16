import React, { Component } from 'react';
import { connect } from 'react-redux';
import StudentSidebar from './StudentSidebar';
import StudentSubmissionCard from './StudentSubmissionCard';
import { fetchSubmissionList } from '../../../redux/actions/submissonAction';

class StudentDashboard extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSubmissionList();
  }

  render() {
    // const submissionList
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

const mapStateToProps = (store) => store;

export default connect(mapStateToProps, { fetchSubmissionList })(StudentDashboard);
