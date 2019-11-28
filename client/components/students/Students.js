import React, { Component } from "react";
import AdminSidebar from "../adminDashboard/AdminSidebar";
import StudentCard from "./StudentCard";

class Students extends Component {
    constructor() {
        super()
        this.state = {
            studentList: null
        }
    }

    componentDidMount() {
        fetch("/users", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => this.setState({ studentList: data.users }))
    }

    render() {
        const studentList = (this.state && this.state.studentList)
        // console.log(studentList)
        return (
            <div className="wrapper grid-dashboard">
                <AdminSidebar />
                <div>
                    <h3 className="flex-center" style={{ color: "rgb(59, 57, 57)" }}>Students</h3>
                    <div className="grid-col-3">
                        {
                            studentList && studentList.map(student => {
                                return console.log(student),
                                    <StudentCard studentData={student} />
                            })
                        }

                    </div>

                </div>
            </div>
        )
    }
}

export default Students;