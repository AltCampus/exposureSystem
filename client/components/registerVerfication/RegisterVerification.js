import React from "react"
import {NavLink} from "react-router-dom"

function RegisterVerification() {
    return (
        <div style={{ textAlign: "center", marginTop: "150px" }}>
            <h1>Thank You for registering with us!</h1>
            <h5>Please wait for your verification email before proceding</h5>
            <NavLink className="button is-primary" to="/">Home</NavLink>
        </div>
    )
}


export default RegisterVerification