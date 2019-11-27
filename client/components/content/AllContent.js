import React, { Component } from "react";
import AdminSidebar from "../adminDashboard/AdminSidebar";
import Content from "./Content";

class AllContents extends Component {
  constructor() {
    super();
    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/newContent", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => {
        this.setState({ ...this.state, content: data });
      });
  }
  render() {
    console.log(this.state.content, "in state");
    const content = this.state.content;
    return (
      <div className="wrapper grid-dashboard">
        <AdminSidebar />
        <div>
          <h3 className="flex-center" style={{ color: "rgb(59, 57, 57)" }}>
            What is this
          </h3>

          <div className="grid-col-3">
            {content &&
              content.map((content, index) => {
                <Content data={content} key={index} />;
              })}

            <Content />
            <Content />
            <Content />
          </div>
        </div>
      </div>
    );
  }
}

export default AllContents;
