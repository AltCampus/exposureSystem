import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// TODO : MAKE IT AS WHEN CLICKED ON THE CARD IT OPENS THE ORIGINAL ARTICLE + SUBMISSION (GET)
class StudentSubmissionCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // const { title, contentSummary } = this.props.submission;
    return (
      // <NavLink>
      <div className="wrapper flex-column">
        <div className="flex-column">
          <h5 className="card-heading flex-center">
            Title : This is the title
          </h5>
          <h5 className="card-details">Submitted Summary: </h5>
          <p>This is the summary of the submission</p>
          <div className="card-footer">Created at: 01/01/2020</div>
        </div>
      </div>
      // </NavLink>
    );
  }
}

const mapStateToProps = state => state;
export default StudentSubmissionCard;
