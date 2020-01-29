import React from 'react';
import { createContent } from '../../redux/actions/contentAction';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button, Modal, Form, Input, Radio } from 'antd';
const { TextArea } = Input;

const ContentCreateForm = Form.create({ name: 'form_in_modal' })(
  // eslint-disable-next-line
  class extends React.Component {
    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          visible={visible}
          title='Add New Content'
          okText='Add'
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout='vertical'>
            <Form.Item label='Title'>
              {getFieldDecorator('title', {
                rules: [
                  {
                    required: true,
                    message: 'Please input the title of content!',
                  },
                ],
              })(<Input />)}
            </Form.Item>
            <Form.Item label='Description'>
              {getFieldDecorator('description')(
                <TextArea rows={4} size='large' />,
              )}
            </Form.Item>
            <Form.Item label='URL'>
              {getFieldDecorator('contentUrl', {
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
                initialValue: 'resource',
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

class NewContentModal extends React.Component {
  state = {
    visible: false,
    type: '',
    url: '',
    title: '',
    description: '',
  };

  cb = () => {
    this.props.history.push('/admin/contents');
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
      console.log(values, 'values');
      if (err) {
        return;
      }

      console.log('Received values of form: ', values);
      this.props.createContent(values, this.cb);

      form.resetFields();
      this.setState({ visible: false });
    });
  };

  saveFormRef = formRef => {
    this.formRef = formRef;
  };

  render() {
    return (
      <div>
        {/* <a onClick={this.showModal}>New Collection</a> */}
        <Button type='primary' onClick={this.showModal}>
          Add New Content
        </Button>
        <ContentCreateForm
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
export default connect(mapStateToProps, { createContent })(
  withRouter(NewContentModal),
);
