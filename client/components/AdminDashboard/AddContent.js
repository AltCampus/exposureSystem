import React, { Component } from "react";
import Header from "../Header";
import AdminSidebar from "./AdminSidebar";

class AddContent extends Component {
  constructor() {
    super();
    this.state = {
      type: "",
      url: "",
      title: "",
      description: ""
    };
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <>
        <div className="wrapper grid-dashboard">
          <AdminSidebar />
          <form className="flex-column flex-center card">
            <select
              name="type"
              className="input input-select"
              onClick={this.handleChange}
              defaultValue={"DEFAULT"}
            >
              <option value="DEFAULT" disabled>
                Type
              </option>
              <option className="input" value="resource">
                Resource
              </option>
              <option className="input" value="challenge">
                Challenge
              </option>
            </select>

            <input
              className="input"
              type="text"
              placeholder="Content Url"
              value={this.state.url}
              onChange={this.handleChange}
              name="url"
            ></input>
            <input
              className="input"
              type="text"
              placeholder="Title"
              value={this.state.title}
              onChange={this.handleChange}
              name="title"
            ></input>
            <textarea
              className="input"
              type="text"
              placeholder="Description"
              value={this.state.description}
              onChange={this.handleChange}
              name="description"
            ></textarea>
            <button className="button">Add Content</button>
          </form>
        </div>
      </>
    );
  }
}

export default AddContent;
