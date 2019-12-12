import React, { Component } from 'react';
import { connect } from 'react-redux';
import StudentSidebar from './StudentSidebar';
import StudentSubmissionCard from './StudentSubmissionCard';
import fetchSubmissionList from '../../../redux/actions/submissonAction'

class StudentDashboard extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    submissionList: this.props.state.submissionList;
  }

  componentDidMount() {
    fetchSubmissionList();
  }

  render() {
    return (
      <div className="wrapper grid-dashboard">
        <StudentSidebar />
        <div>
          {
            this.state.submissionList.map((submission) => {
              <StudentSubmissionCard submission={submission}/>
            })
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(StudentDashboard);
