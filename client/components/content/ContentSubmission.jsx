import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  fetchDeliveryData,
  createSubmission,
} from '../../redux/actions/submissonAction';
const { updatePoints } = require('../../../utils/pointsSystem');

import { Input, Result, Button } from 'antd';

const { TextArea } = Input;

class ContentSubmission extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null,
      userid: null,
      contentid: null,
      contentSummary: null,
      createdAt: null,
      email: null,
    };
  }

  cbSetState = () => {
    this.setState({
      title: this.props.submissionReducer.deliveryData.content.title,
      userid: this.props.submissionReducer.deliveryData.student._id,
      content: this.props.submissionReducer.deliveryData.content,
      contentid: this.props.submissionReducer.deliveryData.content._id,
      createdAt: this.props.submissionReducer.deliveryData.createdAt,
      email: this.props.submissionReducer.deliveryData.student.email,
    });
  };
  componentDidMount() {
    const deliveryId = window.location.href.split('/').pop();
    this.props.fetchDeliveryData(deliveryId, this.cbSetState);
  }
  cbRoute = () => {
    this.props.history.push('/feed');
  };
  onSubmit = e => {
    e.preventDefault();
    // if (this.state.contentSummary[0].split(' ').length < 500) {
    //   return alert('Summary should have atleast 500 words.');
    // } else {
    {
      this.props.createSubmission(this.state, this.cbRoute);
    }
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    console.log(this.props, 'props');
    const content =
      this.props.submissionReducer.deliveryData &&
      this.props.submissionReducer.deliveryData.content;
    const student =
      this.props.submissionReducer.deliveryData &&
      this.props.submissionReducer.deliveryData.student;
    // const points = new Date(
    //   this.state.createdAt.valueOf() + 172800 * 1000 > Date.now(),
    // );
    // console.log(points, 'points');
    console.log(content, 'content');
    if (this.props.state.user.email == this.state.email) {
      return (
        <div className='wrapper'>
          <h2 className='heading text-center'>{this.state.title}</h2>
          <div className='grid-col-2'>
            <div className='submission-head flex-center'>
              <div className='submission-description'>
                {content && content.description}
              </div>
            </div>
            <div className='submission-head flex-center'>
              <div>
                <span>Assigned to:</span>
                {student && student.username}
              </div>
              {/* <div>Paired with:</div> */}
              <div>Type: {content && content.type}</div>
              {/* <div>Due by:</div> */}
            </div>
          </div>
          <iframe
            className='article'
            // src={`${this.state.contentUrl}`}
            target='_parent'
          />
          <div className='submission-card'>
            <form>
              <div className='flex-center'>
                <textarea
                  width='100%'
                  minLength='300'
                  maxLength='1000'
                  className='summary input'
                  placeholder='What are your takeaways from this article?'
                  onChange={this.handleChange}
                  value={this.state.summary}
                  name='contentSummary'
                />
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  marginRight: '14rem',
                }}
              >
                <Button
                  className='button'
                  type='primary'
                  onClick={this.onSubmit}
                >
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      );
    } else {
      // return <h2 className='heading'>Oops! Something went wrong there!</h2>;
      return (
        <Result
          status='403'
          title='403'
          subTitle='Sorry, you are not authorized to access this page.'
          extra={
            <Button type='primary' href='/'>
              Back Home
            </Button>
          }
        />
      );
    }
  }
}

const mapStateToProps = store => store;

export default connect(mapStateToProps, {
  updatePoints,
  fetchDeliveryData,
  createSubmission,
})(withRouter(ContentSubmission));
