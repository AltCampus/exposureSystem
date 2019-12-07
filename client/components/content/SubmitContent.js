import React, { Component } from "react"

class SubmitContent extends Component {
    render() {
        return (
            <div style={{textAlign: "center"}}>
                <h3>Your submission</h3>
                <div>
                    <textarea style={{ border: "1px solid black" }}>

                    </textarea>
                    <br></br>
                    <button>Submit</button>
                </div>
            </div>

        )
    }
}









export default SubmitContent