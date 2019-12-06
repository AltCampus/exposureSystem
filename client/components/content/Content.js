import React, { Component } from "react";
import { Link } from "react-router-dom"

class Content extends Component {
  constructor(props) {
    super(props);
  }


  // handleDeleteContent = () => {

  // }

  render() {
    console.log(this.props);
    // const {title, type, description,} = this.props.location.contentProps
    // console.log(this.props && this.props.location.contentProps.contentData, "inside content")
    return (
      <div className="wrapper">
        <div className="sidebar-heading flex-center">Title</div>
        <div className="grid-col-2">
          <div className="submission-head flex-center">
            <div>Description:</div>
          </div>
          <div className="submission-head flex-center">
            <div>Submissions:</div>
            <div>Type:</div>
          </div>
        </div>
        <iframe
          className="article"
          src="https://en.wikipedia.org/wiki/Der_Ring_des_Nibelungen"
        ></iframe>
        <div className="flex-end ">
          {/* //TODO integrate Edit and delete */}

          <Link to="/submitcontent">
            <button className="content-button">Submit</button>
          </Link>

          <Link to="/editcontent">
            <button className="content-button">Edit</button>
          </Link>

          <button onClick={this.handleDeleteContent} className="content-button">Delete</button>
        </div>
      </div>
    );
  }
}

export default Content;
