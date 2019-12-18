/* eslint-disable react/jsx-indent */
import React, { Component } from "react";
import { connect } from "react-redux";
import registerStudent from "../../redux/actions/registerAction";
import swal from 'sweetalert';

class Onboarding extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    username: this.props.registerFormReducer.studentUsername,
    email: this.props.registerFormReducer.studentEmail,
    password: this.props.registerFormReducer.studentPassword,
    isInCampus: false,
    isActive: false
  };
  cb = () => {
    this.props.history.push("/await-approval");
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = () => {
    console.log("submit called", this.state);
    const studentData = {
      username: this.state.username,
      password: this.state.password,
      email: this.state.email,
      isInCampus: this.state.isInCampus,
      isActive: this.state.isActive
    };
    registerStudent(studentData, this.cb);


    swal({
      title: "Good Job",
      text: "Please wait for your email verification. Meanwhile, you will be directed to the home page.",
      icon: "success",
      timer: 3000
    }).then(
      function() {
        window.location = "/";
      });
  };

  render() {
    return (
      <div className="container wrapper">
        <form className="notification ">
          <div class="field">
            <label class="label">Are you on campus currently?</label>
            <div class="control">
              <div class="select">
                <select>
                  <option
                    name="isInCampus"
                    value="true"
                    onChange={this.handleChange}
                  >
                    Yes
                  </option>
                  <option
                    name="isInCampus"
                    value="false"
                    onChange={this.handleChange}
                  >
                    No
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div class="field">
            <label class="label">Subject</label>
            <div class="control">
              <div class="select">
                <select>
                  <option
                    name="isActive"
                    value="true"
                    onChange={this.handleChange}
                  >
                    Yes
                  </option>
                  <option
                    name="isActive"
                    value="false"
                    onChange={this.handleChange}
                  >
                    No
                  </option>
                </select>
              </div>
            </div>
          </div>
          <button
            type="submit"
            onClick={this.handleSubmit}
            className="button is-primary is-right"
          >
            Register
          </button>
        </form>
      </div>
      // <div className="wrapper">
      //   <div className="grid-col-2 onboardingCard">
      //     <div>
      //       <h5>Are you on campus currently?</h5>
      //       <br></br>
      //       <h5>Do you wish to recieve emails from AltCampus?</h5>
      //     </div>
      //     <div className="grid-col-2">
      //       <div className="flex-end">
      //         <input
      //           type="radio"
      //           name="isInCampus"
      //           value="true"
      //           onChange={this.handleChange}
      //         />
      //         <p>Yes</p>
      //       </div>
      //       <div className="flex-end">
      //         <input
      //           type="radio"
      //           name="isInCampus"
      //           value="false"
      //           onChange={this.handleChange}
      //         />
      //         <p>No</p>
      //       </div>
      //       <div className="flex-end">
      //         <input
      //           type="radio"
      //           name="isActive"
      //           value="true"
      //           onChange={this.handleChange}
      //         />
      //         <p>Yes</p>
      //       </div>
      //       <div className="flex-end">
      //         <input
      //           type="radio"
      //           name="isActive"
      //           value="true"
      //           onChange={this.handleChange}
      //         />
      //         <p>No</p>
      //       </div>
      //     </div>
      //   </div>
      //   <div className="flex-end">
      //     <button type="submit" onClick={this.handleSubmit} className="button is-primary is-normal is-right">
      //       Register
      //     </button>
      //   </div>
      // </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, { registerStudent })(Onboarding);
