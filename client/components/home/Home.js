import React from "react";
import Header from "../header/Header";



class Home extends React.Component {
  render() {
    return (
      // <Header />
      <div className="wrapper">
        <div className="text-center home-description">
          <p>An exciting new initiative to expose</p>
          <h4>
            Humans of 
            <img className="alt-image" src="https://altcampus.io/images/logo.png"></img>
          </h4>
          <p>to various ideas and opinions other than just programming</p> 
        </div>
      </div>
    )
  }
}

export default Home
