import React, { Component } from "react";
import Header from "../header/Header";
import AdminSidebar from "../adminDashboard/AdminSidebar";

class AddContent extends Component {
    constructor() {
        super();
        this.state = {
            type: "",
            url: "",
            title: "",
            description: ""
        }
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault()

        const body = {
            type: this.state.type,
            url: this.state.url,
            title: this.state.title,
            description: this.state.description,

        }

        fetch("/newContent", {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

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
                            defaultValue={'DEFAULT'}>
                            <option
                                value="DEFAULT"
                                disabled>
                                Type
                        </option>
                            <option
                                className="input"
                                value="resource">
                                Resource
                        </option>
                            <option
                                className="input"
                                value="challenge">
                                Challenge
                        </option>
                        </select>

                        <input
                            className="input"
                            type="text"
                            placeholder="Content Url"
                            value={this.state.url}
                            onChange={this.handleChange}
                            name="url"></input>
                        <input
                            className="input"
                            type="text"
                            placeholder="Title"
                            value={this.state.title}
                            onChange={this.handleChange}
                            name="title"></input>
                        <textarea
                            className="input"
                            type="text"
                            placeholder="Description"
                            value={this.state.description}
                            onChange={this.handleChange}
                            name="description"></textarea>

                        <button
                            className="button" onClick={this.handleSubmit}>
                            Add Content
                    </button>
                    </form>

                </div>

            </>
        )
    }
}


export default AddContent;