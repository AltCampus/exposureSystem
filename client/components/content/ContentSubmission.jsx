import React, { Component } from 'react';

// TODO
// change from contentSubmission to contentSubmit

class ContentSubmission extends Component {
  constructor() {
    super();
    this.state = {
      content: null,
      contentUrl: '',
      user: null,
    };
  }

  componentDidMount() {
    const deliveryId = window.location.href.split('/').pop();
    fetch(`http://localhost:3000/api/v1/delivery/${deliveryId}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          content: data.delivery.content[0],
          user: data.delivery.user[0],
          contentUrl: data.delivery.content[0].contentUrl,
        });
        // this.setState({ contentUrl: data.delivery.content[0].contentUrl });
      });
  }

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
          <button className="button" type="submit">Submit</button>
        </div>
      </div>
    );
  }
}

export default ContentSubmission;
