import React, { Component } from "react";
import AdminSidebar from "./AdminSidebar";
import Pending from "./PendingCard";

class PendingApprovals extends Component {
    constructor() {
        super()
        this.state = {
            pendingStudentList: null
        }
    }


    componentDidMount() {
        fetch("/admin/pending", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => this.setState({ pendingStudentList: data }))
    }

    render() {
        console.log(this.state)
        return (
            <>
                <div className="wrapper grid-dashboard">
                    <AdminSidebar />
                    <div>
                        <h3 className="flex-center" style={{ color: "rgb(59, 57, 57)" }}>Pending Approvals</h3>
                        <div className="grid-col-3">
                            <Pending />
                            <Pending />
                            <Pending />
                        </div>
                    </div>

                </div>
            </>
        )
    }
}


export default PendingApprovals;