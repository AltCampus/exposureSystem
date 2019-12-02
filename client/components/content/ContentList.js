import React, { Component } from "react";
import AdminSidebar from "../adminDashboard/AdminSidebar";
import ContentCard from "./ContentCard";

class ContentList extends Component {
  constructor() {
    super();
    this.state = {
      contentList: null
    };
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componentDidMount() {
    //TODO
    //change route
    fetch("/newContent", {
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => this.setState({ ...this.state, contentList: data }));
  }

  render() {
    const contentList = this.state && this.state.contentList;
    console.log(contentList);

    return (
      <div className="wrapper grid-dashboard">
        <AdminSidebar />
        <div>
          <h3 className="flex-center" style={{ color: "rgb(59, 57, 57)" }}>
            Content
          </h3>
          <div className="grid-col-3">
            {contentList &&
              contentList.map(content => {
                return <ContentCard contentData={content} />;
              })}
          </div>
        </div>
      </div>
    );
  }
}

export default ContentList;
