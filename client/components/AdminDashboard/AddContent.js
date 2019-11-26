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

  handleSubmit = event => {
    event.preventDefault();
    console.log("handleSubmit called");
    const data = {
      type: this.state.type,
      url: this.state.url,
      title: this.state.title,
      description: this.state.description
    };
    fetch("/newcontent", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(this.props.history.push("/allcontent"));
  };

  render() {
    return (
      <>
        <div className="wrapper grid-dashboard">
          <AdminSidebar />
          <form
            className="flex-column flex-center card"
            // onSubmit={this.handleSubmit}
          >
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
              name="url"
              className="input"
              type="text"
              placeholder="Content Url"
              value={this.state.url}
              onChange={this.handleChange}
            ></input>
            <input
              name="title"
              className="input"
              type="text"
              placeholder="Title"
              value={this.state.title}
              onChange={this.handleChange}
            ></input>
            <textarea
              name="description"
              className="input"
              type="text"
              placeholder="Description"
              value={this.state.description}
              onChange={this.handleChange}
            ></textarea>
            <button className="button" onClick={this.handleSubmit}>
              Add Content
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default AddContent;
