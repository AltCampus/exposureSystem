/* eslint-disable react/jsx-indent */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import registerStudent from '../../redux/actions/registerAction';

class Onboarding extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    username: this.props.studentUsername,
    email: this.props.studentEmail,
    password: this.props.studentPassword,
    isInCampus: false,
    isActive: false,
  };
  cb() {
    this.history.push('https://localhost:3000/await-approval');
  }
  handleSubmit() {
    registerStudent(this.state, cb);
  }
  render() {
    return (
      <div className="wrapper card flex-column">
        <div className="grid-col-2 onboardingCard">
          <div>
            <h5>Are you on campus currently?</h5>
            <br></br>
            <h5>Do you wish to recieve emails from AltCampus?</h5>
          </div>
          <div className="grid-col-2">
            <div className="flex-end">
              <input type="radio" name="isInCampus" value="true" />
              <p>Yes</p>
            </div>
            <div className="flex-end">
              <input type="radio" name="isInCampus" value="false" />
              <p>No</p>
            </div>
            <div className="flex-end">
              <input type="radio" name="isActive" value="true" />
              <p>Yes</p>
            </div>
            <div className="flex-end">
              <input type="radio" name="isActive" value="true" />
              <p>No</p>
            </div>
          </div>
        </div>
        <div className="flex-end">
          <button type="submit" onSubmit={this.handleSubmit} className="button">
            Register
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Onboarding);
