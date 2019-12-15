import React, { Component } from 'react';
import AdminSidebar from '../adminDashboard/AdminSidebar';
import ContentCard from './ContentCard';
import { connect } from 'react-redux';

import { fetchContentList } from '../../redux/actions/contentAction';

class ContentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contentList: '',
    };
  }

  componentDidMount() {
    this.props.fetchContentList();
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    console.log(this.props);
    const contentList =
      this.props.adminReducer.contentList &&
      this.props.adminReducer.contentList.contents;
    console.log(contentList, 'cc');
    return (
      <div className="wrapper grid-dashboard">
        <div>
          <AdminSidebar />
        </div>
        <div>
          <h3 className="flex-center" style={{ color: 'rgb(59, 57, 57)' }}>
            Content List
          </h3>
          <div className="grid-col-3">
            {contentList &&
              contentList.map(content => {
                return <ContentCard key={content.id} content={content} />;
              })}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return store;
};
export default connect(mapStateToProps, { fetchContentList })(ContentList);
