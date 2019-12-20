/* eslint-disable react/jsx-indent */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import registerStudent from '../../redux/actions/registerAction';
import { Button, Checkbox } from 'antd';
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

  onCheckChange1 = e => {
    this.setState({
      isInCampus: e.target.checked,
    });
  };

  onCheckChange2 = e => {
    this.setState({
      isActive: e.target.checked,
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log('submit called', this.state);
    const studentData = {
      username: this.state.username,
      password: this.state.password,
      email: this.state.email,
      isInCampus: this.state.isInCampus,
      isActive: this.state.isActive,
    };
    registerStudent(studentData, this.cb);

    swal({
      title: 'Registered! ',
      icon: 'success',
      timer: 3000,
    });
  };

  render() {
    return (
      <div className='container card flex-center'>
        <form className='notification text-center'>
          <label className='label'>Are you in campus currently?</label>
          <div className='control'>
            <div className='select'>
              <Checkbox
                name='isInCampus'
                onChange={this.onCheckChange1}
                defaultChecked={false}
              >
                In Campus
              </Checkbox>
            </div>
          </div>
          <div className='field'>
            <label className='label'>
              Do you consent to receiving emails from us?
            </label>
            <div className='control'>
              <div className='select'>
                <Checkbox
                  name='isActive'
                  onChange={this.onCheckChange2}
                  defaultChecked={false}
                >
                  In Campus
                </Checkbox>
              </div>
            </div>
          </div>

          <Button className='button' type='primary' onClick={this.handleSubmit}>
            Register
          </Button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, { registerStudent })(Onboarding);
