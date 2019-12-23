import React from 'react';
import { connect } from 'react-redux';
import { updateProfile } from '../../redux/actions/studentAction';

import { Button, Modal, Form, Input, Radio, Checkbox } from 'antd';

const UpdateProfileForm = Form.create({ name: 'form_in_modal' })(
  // eslint-disable-next-line
  class extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      console.log(this.props, 'inside modaaaal');
      return (
        <Modal
          visible={visible}
          title='Update Profile'
          okText='Update'
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout='vertical'>
            <Form.Item label='Username'>
              {getFieldDecorator('id', {
                initialValue: this.props.state.user._id,

                rules: [
                  {
                    required: true,
                    message: 'Please dont change the ID',
                  },
                ],
              })(<Input disabled={true} />)}
            </Form.Item>
            <Form.Item label='Username'>
              {getFieldDecorator('username', {
                initialValue: this.props.state.user.username,

                rules: [
                  {
                    required: true,
                    message: 'Please dont change the username',
                  },
                ],
              })(<Input disabled={true} />)}
            </Form.Item>

            <Form.Item label='Email'>
              {getFieldDecorator('email', {
                initialValue: this.props.state.user.email,

                rules: [
                  {
                    required: true,
                    message: 'Please input the email!',
                  },
                ],
              })(<Input disabled={true} />)}
            </Form.Item>

            <Form.Item
              label='In Campus'
              className='collection-create-form_last-form-item'
            >
              {getFieldDecorator('isInCampus', {
                initialValue: this.props.state.user.isInCampus,
              })(
                <Radio.Group>
                  <Radio value={true}>Yes!</Radio>
                  <Radio value={false}>No</Radio>
                </Radio.Group>,
              )}
            </Form.Item>
          </Form>
        </Modal>
      );
    }
  },
);

class UpdateProfileModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      id: '',
      username: '',
      email: '',
      isInCampus: null,
    };
  }

  cb = () => {
    this.props.history.push('/feed');
  };

  showModal = () => {
    this.setState({ visible: true });
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  handleCreate = () => {
    const { form } = this.formRef.props;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      console.log('Received values of form: ', values);
      this.props.updateProfile(values);
      // this.props.dispatch(updateProfile(values));

      // form.resetFields();
    });
    this.setState({ visible: false });
  };

  saveFormRef = formRef => {
    this.formRef = formRef;
  };

  render() {
    console.log(this.props, 'inside modal');
    return (
      <div>
        <Button type='primary' onClick={this.showModal}>
          Edit Profile
        </Button>
        <UpdateProfileForm
          {...this.props}
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, { updateProfile })(UpdateProfileModal);
