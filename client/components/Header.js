import React from "react";
import { NavLink} from "react-router-dom"

class Header extends React.Component {
  render() {
    return (
      <div className="wrapper header">
        <div className="flex-between">
          <div>
            <NavLink className="icon" to="/"><h3>Exposure System</h3></NavLink>
          </div>
          <div>
            <nav>
                  <NavLink className="head-links" activeClassName="active" to="/signup">Sign Up</NavLink>
                  <NavLink className="head-links" activeClassName="active" to="/signin">Sign In</NavLink>   
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
