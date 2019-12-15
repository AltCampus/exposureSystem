/* eslint-disable react/jsx-indent */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import registerStudent from '../../redux/actions/registerAction';

class Onboarding extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    username: this.props.registerFormReducer.studentUsername,
    email: this.props.registerFormReducer.studentEmail,
    password: this.props.registerFormReducer.studentPassword,
    isInCampus: false,
    isActive: false,
  };
  cb = () => {
    this.props.history.push('/await-approval');
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = () => {
    console.log('submit called', this.state);
    const studentData = {
      username: this.state.username,
      password: this.state.password,
      email: this.state.email,
      isInCampus: this.state.isInCampus,
      isActive: this.state.isActive,
    };
    registerStudent(studentData, this.cb);
  };
  render() {
    // console.log(this.state, 'onboarding');
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
              <input
                type="radio"
                name="isInCampus"
                value="true"
                onChange={this.handleChange}
              />
              <p>Yes</p>
            </div>
            <div className="flex-end">
              <input
                type="radio"
                name="isInCampus"
                value="false"
                onChange={this.handleChange}
              />
              <p>No</p>
            </div>
            <div className="flex-end">
              <input
                type="radio"
                name="isActive"
                value="true"
                onChange={this.handleChange}
              />
              <p>Yes</p>
            </div>
            <div className="flex-end">
              <input
                type="radio"
                name="isActive"
                value="true"
                onChange={this.handleChange}
              />
              <p>No</p>
            </div>
          </div>
        </div>
        <div className="flex-end">
          <button type="submit" onClick={this.handleSubmit} className="button">
            Register
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, { registerStudent })(Onboarding);
