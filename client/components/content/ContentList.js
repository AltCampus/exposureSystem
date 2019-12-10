import React, { Component } from "react";
import AdminSidebar from "../adminDashboard/AdminSidebar";
import ContentCard from "./ContentCard";
import { connect } from "react-redux";
import { getContent } from "../actions/contentAction"
import Header from "../header/Header"


class ContentList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getContent()
  }

  render() {
    const contentList = this.props.contentReducer.content.contents
    console.log(contentList)
    return (
      <>
        <Header />
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

              {
                contentList && contentList.map(content => {
                  // console.log(content)
                  return <ContentCard content={content} />
                })
              }
          </div>
        </div>
      </div>
      </>
    );
  }
}


const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, { getContent })(ContentList) 
