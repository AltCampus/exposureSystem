import React, { Component } from "react";
import AdminSidebar from "../adminDashboard/AdminSidebar";
import ContentCard from "./ContentCard";

class AllContents extends Component {
    constructor() {
        super();
        this.state = {
            contentList: null
        }
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    componentDidMount() {
        fetch("/newContent")
            .then(res => res.json())
            .then(data => this.setState({ contentList: data }))
    }


    render() {
        const contentList = this.state && this.state.contentList
        console.log(contentList)

        return (
            <div className="wrapper grid-dashboard">
                <AdminSidebar />
                <div>
                    <h3 className="flex-center" style={{ color: "rgb(59, 57, 57)" }}>Content</h3>
                    <div className="grid-col-3">
                        {
                            contentList && contentList.map(content => {
                                return <ContentCard {...content} />
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default AllContents;