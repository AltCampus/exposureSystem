import React, { Component } from "react";
import AdminSidebar from "../adminDashboard/AdminSidebar";
import ContentCard from "./ContentCard";


class ContentList extends Component {
  constructor() {
    super();
    this.state = {
      contentList: ""
    };
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componentDidMount() {
    fetch("http://localhost:3000/api/v1/content/list", {
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => this.setState({ ...this.state, contentList: data }));
  }

  render() {
    console.log(this.props)
    return (
      <div className="wrapper grid-dashboard">
        <div>
          <AdminSidebar />
        </div>
        <div>
          <h3 className="flex-center" style={{ color: "rgb(59, 57, 57)" }}>Content List</h3>
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
