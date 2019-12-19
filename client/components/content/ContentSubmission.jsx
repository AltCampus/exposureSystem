import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  fetchDeliveryData,
  createSubmission,
} from '../../redux/actions/submissonAction';
const { updatePoints } = require('../../../utils/pointsSystem');

// TODO
// change from contentSubmission to contentSubmit

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
      contentid: this.props.submissionReducer.deliveryData.content._id,
      createdAt: this.props.submissionReducer.deliveryData.createdAt,
      email: this.props.submissionReducer.deliveryData.student.email,
    });
  };
  componentDidMount() {
    const deliveryId = window.location.href.split('/').pop();
    this.props.fetchDeliveryData(deliveryId, this.cbSetState);
  }

  onSubmit = e => {
    e.preventDefault();
    if (this.state.contentSummary[0].split(' ').length < 500) {
      return alert('Summary should have atleast 500 words.');
    } else {
      this.props.createSubmission(this.state);
    }
    // updatePoints(student);
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: [e.target.value],
    });
  };

  render() {
    const content =
      this.props.submissionReducer.deliveryData &&
      this.props.submissionReducer.deliveryData.content;
    const student =
      this.props.submissionReducer.deliveryData &&
      this.props.submissionReducer.deliveryData.student;
    if (this.props.state.user.email == this.state.email) {

      return (
        <div className='wrapper'>
          <div className='sidebar-heading flex-center'>Title</div>
          <div className='grid-col-2'>
            <div className='submission-head flex-center'>
              <div>Description:</div>
            </div>
            <div className='submission-head flex-center'>
              <div>
                <span>Assigned to:</span>
                {student && student.username}
              </div>
              <div>Paired with:</div>
              <div>Type:</div>
              <div>Due by:</div>
            </div>
          </div>
          <iframe
            className='article'
            // src={`${this.state.contentUrl}`}
            target='_parent'
          />
          <form>
            <div className='flex-center'>
              <textarea
                minLength='300'
                maxLength='1000'
                className='summary input'
                placeholder='Summarize the above article in your words'
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
              <button className='button' type='submit'>
                Submit
              </button>
            </div>
          </form>
        </div>
      );
    }
    return (
      <h1>You are not authorized</h1>
    )
  }
}

const mapStateToProps = store => store;

export default connect(mapStateToProps, {
  updatePoints,
  fetchDeliveryData,
  createSubmission,
})(ContentSubmission);
