
import React, { Component } from 'react';

// TODO
// change from contentSubmission to contentSubmit

class ContentFeedback extends Component {
  constructor() {
    super();
    this.state = {
      contentUrl: '',
    };
  }


  componentDidMount() {
    var link = window.location.href.split('/').pop();
    console.log(link, 'link');
    // fetch(`http://localhost:3000/api/v1/delivery/5dea146c1c27b04750830671`, {
    fetch(`http://localhost:3000/api/v1/delivery/${link}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(data => {
        console.log(data, 'data');
        this.setState({ contentUrl: data.delivery.content[0].contentUrl });
      });
  }

  render() {
    console.log(this.state.contentUrl, 'rndr');
    return (
      <div className="wrapper">
        <div className="sidebar-heading flex-center">Title</div>
        <div className="grid-col-2">
          <div className="submission-head flex-center">
            <div>Description:</div>
          </div>
          <div className="submission-head flex-center">
            <div>Assigned to:</div>
            <div>Paired with:</div>
            <div>Type:</div>
            <div>Due by:</div>
          </div>
        </div>

        <iframe
          className="article"
          src={`${this.state.contentUrl}`}
          target="_parent"
        ></iframe>

        {/* <iframe
          className="article"
          src={
            this.state.contentUrl
              ? this.state.contentUrl
              : 'https://css-tricks.com/snippets/javascript/select-random-item-array/'
          }
        ></iframe> */}
        {/* {this.state.contentURL ? (
          <iframe className="article" src={this.state.contentURL}></iframe>
        ) : (
          ''
        )} */}
        <div className="flex-center">
          <textarea
            minLength="300"
            maxLength="1000"
            className="summary input"
            placeholder="Summarize the above article in your words"
          ></textarea>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            marginRight: '14rem',
          }}
        >
          <button className="button">Submit</button>
        </div>
      </div>
    );
  }
}

export default ContentFeedback;
