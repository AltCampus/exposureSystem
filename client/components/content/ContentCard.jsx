import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class ContentCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { type, title, description } = this.props.content;
    return (
      <div className="student-card">
        <div className="grid-col-2 content-head">
          <div>{type}</div>
          <div>{title}</div>
        </div>
        <div className="content-card-description">
          <div>{description}</div>
        </div>
        {/* //TODO navlink should redirect to individual content piece by passing
        contentid from props */}
        <NavLink
          to={{
            pathname: '/content/:contentid',
            contentProps: { contentData: this.props.contentData },
          }}
          className="content-link"
        >
          Read More >>>
        </NavLink>
      </div>
    );
  }
}

export default ContentCard;
