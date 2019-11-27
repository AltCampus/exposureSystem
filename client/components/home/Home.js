import React from "react";
import Header from "../header/Header";
import { NavLink} from "react-router-dom"



class Home extends React.Component {
  render() {
    return (
      // <Header />
      <div className="wrapper">
        <div className="text-center home-description flex-center">
          <p>An exciting new initiative to expose</p>
          <h4>
            Humans of 
            <img className="alt-image" src="https://altcampus.io/images/logo.png"></img>
          </h4>
          <p>to various ideas and opinions other than just programming</p> 
          <NavLink className="button" to="/signup">Register</NavLink>
        </div>
      </div>
    )
  }
}

export default Home
