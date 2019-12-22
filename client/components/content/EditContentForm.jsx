// import React from 'react';
// import { connect } from 'react-redux';
// import { updateContent } from '../../redux/actions/contentAction';

// import { Drawer, Form, Button, Row, Input, Select } from 'antd';

// const { Option } = Select;

// class EditContent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { visible: false };
//   }

//   showDrawer = () => {
//     this.setState({
//       visible: true,
//     });
//   };

//   onClose = () => {
//     this.setState({
//       visible: false,
//     });
//   };

//   handleEdit = () => {
//     const { form } = this.formRef.props;
//     form.validateFields((err, values) => {
//       if (err) {
//         return;
//       }

//       console.log('Received values of form: ', values);
//       this.props.updateContent(values);

//       // form.resetFields();
//       this.setState({ visible: false });
//     });
//   };

//   render() {
//     console.log(this.props, 'form');
//     const { getFieldDecorator } = this.props.form;
//     return (
//       <div>
//         <Button type='link' onClick={this.showDrawer}>
//           {/* <Icon type="plus" />  */}
//           Edit
//         </Button>
//         <Drawer
//           title='Edit Content'
//           width={720}
//           onClose={this.onClose}
//           visible={this.state.visible}
//           bodyStyle={{ paddingBottom: 80 }}
//         >
//           <Form layout='vertical' hideRequiredMark>
//             <Row gutter={16}>
//               <Form.Item label='Title'>
//                 {getFieldDecorator('title', {
//                   initialValue: this.props.record.title,
//                   rules: [{ required: true, message: 'Please enter title' }],
//                 })(<Input placeholder='Please enter Title' />)}
//               </Form.Item>
//             </Row>
//             <Row gutter={16}>
//               <Form.Item label='Url'>
//                 {getFieldDecorator('ContentUrl', {
//                   initialValue: this.props.record.contentURL,
//                   rules: [{ required: true, message: 'Please enter url' }],
//                 })(
//                   <Input
//                     style={{ width: '100%' }}
//                     addonBefore='http://'
//                     addonAfter='.com'
//                     placeholder='Please enter url'
//                   />,
//                 )}
//               </Form.Item>
//             </Row>
//             <Row gutter={16}>
//               <Form.Item label='Type'>
//                 {getFieldDecorator('type', {
//                   initialValue: this.props.record.type,
//                   rules: [{ required: true, message: 'Please select type' }],
//                 })(
//                   <Select placeholder='Please select a type'>
//                     <Option value='resource'>Resource</Option>
//                     <Option value='challenge'>Challenge</Option>
//                   </Select>,
//                 )}
//               </Form.Item>
//             </Row>

//             <Row gutter={16}>
//               <Form.Item label='Description'>
//                 {getFieldDecorator('description', {
//                   initialValue: this.props.record.description,
//                   rules: [
//                     {
//                       required: true,
//                       message: 'Please enter Content description',
//                     },
//                   ],
//                 })(
//                   <Input.TextArea
//                     rows={4}
//                     placeholder='Please enter url description'
//                   />,
//                 )}
//               </Form.Item>
//             </Row>
//           </Form>
//           <div
//             style={{
//               position: 'absolute',
//               right: 0,
//               bottom: 0,
//               width: '100%',
//               borderTop: '1px solid #e9e9e9',
//               padding: '10px 16px',
//               background: '#fff',
//               textAlign: 'right',
//             }}
//           >
//             <Button onClick={this.onClose} style={{ marginRight: 8 }}>
//               Cancel
//             </Button>
//             <Button onClick={this.handleEdit} type='primary'>
//               Submit
//             </Button>
//           </div>
//         </Drawer>
//       </div>
//     );
//   }
// }
// const EditContentForm = Form.create({ name: 'edit_form' })(EditContent);

// const mapStateToProps = store => {
//   return store;
// };

// export default connect(mapStateToProps, { updateContent })(EditContentForm);
///////////////////////////////////////////////////////////

import React from 'react';
import { updateContent } from '../../redux/actions/contentAction';
import { connect } from 'react-redux';

import { Button, Modal, Form, Input, Radio } from 'antd';
const { TextArea } = Input;

const EditContentForm = Form.create({ name: 'form_in_modal' })(
  // eslint-disable-next-line
  class extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          visible={visible}
          title='Edit Content'
          okText='Edit'
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout='vertical'>
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
              })}
              <TextArea rows={4} size='large' />,
            </Form.Item>
            <Form.Item label='URL'>
              {getFieldDecorator('contentUrl', {
                initialValue: this.props.record.contentURL,

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
                initialValue: this.props.record.type,
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

class EditContentModal extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    visible: false,
  };

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
      console.log(values, 'values');
      if (err) {
        return;
      }

      console.log('Received values of form: ', values);
      this.props.updateContent(values, this.cb);

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
        <Button type='link' onClick={this.showModal}>
          Edit Content
        </Button>
        <EditContentForm
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
export default connect(mapStateToProps, { updateContent })(EditContentModal);
