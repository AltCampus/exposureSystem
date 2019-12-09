import React, { Component } from "react";
import AdminSidebar from "../adminDashboard/AdminSidebar";
import ContentCard from "./ContentCard";
import { connect } from "react-redux";
import { getContent } from "../actions/contentAction"


class ContentList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getContent()
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


const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, getContent)(ContentList) 
