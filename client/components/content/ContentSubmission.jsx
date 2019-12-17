import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDeliveryData } from '../../redux/actions/submissonAction';
const { updatePoints } = require('../../../utils/pointsSystem');

// TODO
// change from contentSubmission to contentSubmit

class ContentSubmission extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ,
      contentUrl: '',
      user: null,
    };
  }

  componentDidMount() {
    const deliveryId = window.location.href.split('/').pop();
    this.props.fetchDeliveryData(deliveryId);

    // this.setState({ contentUrl: data.delivery.content[0].contentUrl });
  }

  onSubmit = () => {
    updatePoints(user, type);
  };

  render() {
    return (
      <div className="wrapper">
        <div className="sidebar-heading flex-center">Title</div>
        <div className="grid-col-2">
          <div className="submission-head flex-center">
            <div>Description:</div>
          </div>
          <div className="submission-head flex-center">
            <div>
              <span>Assigned to:</span>
              {/* {this.state.user.username} */}
            </div>
            {/* <div>Paired with:</div>
            <div>Type:</div> */}
            <div>Due by:</div>
          </div>
        </div>
        <iframe
          className="article"
          src={`${this.state.contentUrl}`}
          target="_parent"
        />
        <div className="flex-center">
          <textarea
            minLength="300"
            maxLength="1000"
            className="summary input"
            placeholder="Summarize the above article in your words"
          />
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            marginRight: '14rem',
          }}
        >
          <button className="button" type="submit">
            Submit
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => store;

export default connect(mapStateToProps, { updatePoints, fetchDeliveryData })(
  ContentSubmission,
);
