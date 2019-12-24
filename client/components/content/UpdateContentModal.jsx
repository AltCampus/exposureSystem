import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateContent } from '../../redux/actions/contentAction';

import { Button, Modal, Form, Input, Radio } from 'antd';

const UpdateContentForm = Form.create({ name: 'form_in_modal' })(
  // eslint-disable-next-line
  class extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      // console.log(this.props, 'inside form');
      return (
        <Modal
          visible={visible}
          title='Edit Content'
          okText='Update'
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout='vertical'>
            <Form.Item label='ID'>
              {getFieldDecorator('_id', {
                initialValue: this.props.record._id,

                rules: [
                  {
                    required: true,
                    message: 'Please dont change the ID',
                  },
                ],
              })(<Input disabled={true} />)}
            </Form.Item>

            <Form.Item label='Title'>
              {getFieldDecorator('title', {
                initialValue: this.props.record.title,

                rules: [
                  {
                    required: true,
                    message: 'Please input the title of content!',
                  },
                ],
              })(<Input />)}
            </Form.Item>
            <Form.Item label='Description'>
              {getFieldDecorator('description', {
                initialValue: this.props.record.description,
              })(
                <Input.TextArea
                  rows={4}
                  placeholder='Please enter url description'
                />,
              )}
            </Form.Item>
            <Form.Item label='URL'>
              {getFieldDecorator('contentUrl', {
                initialValue: this.props.record.contentUrl,

                rules: [
                  {
                    required: true,
                    message: 'Please enter a URL!',
                  },
                ],
              })(<Input type='url' />)}
            </Form.Item>
            <Form.Item className='collection-create-form_last-form-item'>
              {getFieldDecorator('type', {
                initialValue: this.props.record.resource,
              })(
                <Radio.Group>
                  <Radio value='resource'>Resource</Radio>
                  <Radio value='challenge'>challenge</Radio>
                </Radio.Group>,
              )}
            </Form.Item>
          </Form>
        </Modal>
      );
    }
  },
);

class UpdateContentModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      type: '',
      url: '',
      title: '',
      description: '',
    };
  }

  cb = () => {
    this.props.history.push('/admin/content/list');
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
      this.props.updateContent(values, this.cb);
      // form.resetFields();
    });
    this.setState({ visible: false });
  };

  saveFormRef = formRef => {
    this.formRef = formRef;
  };

  render() {
    return (
      <div>
        {/* <a onClick={this.showModal}>New Collection</a> */}
        <Button type='link' onClick={this.showModal}>
          Edit Content
        </Button>
        <UpdateContentForm
          record={this.props.record}
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
export default connect(mapStateToProps, { updateContent })(withRouter(UpdateContentModal));
