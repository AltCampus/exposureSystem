import React from "react";
import { NavLink} from "react-router-dom"

class Header extends React.Component {
  render() {
    return (
      <div className="wrapper header">
        <div className="flex-between">
          <div>
            <NavLink className="icon" to="/"><h2>Exposure System</h2></NavLink>
          </div>
          <div>
            <nav>
                  <NavLink className="head-links" activeClassName="active" to="/signup">SignUp</NavLink>
                  <NavLink className="head-links" activeClassName="active" to="/signin">SignIn</NavLink>   
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
