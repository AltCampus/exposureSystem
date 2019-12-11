import React, { Component } from 'react';
import AdminSidebar from '../adminDashboard/AdminSidebar';
import ContentCard from './ContentCard';


class ContentList extends Component {
  constructor() {
    super();
    this.state = {
      contentList: '',
    };
  }

  componentDidMount() {

  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }


  render() {
    console.log(this.props);
    return (
      <div className="wrapper grid-dashboard">
        <div>
          <AdminSidebar />
        </div>
        <div>
          <h3 className="flex-center" style={{ color: 'rgb(59, 57, 57)' }}>Content List</h3>
          <div className="grid-col-3">
            {/* {contentList &&
              contentList.map(content => {
                return <ContentCard key={content.id} content={content} />;
              })} */}
          </div>
        </div>
      </div>
    );
  }
}

export default ContentList;
