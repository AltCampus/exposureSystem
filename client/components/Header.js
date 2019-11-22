import React from "react";
import { Link } from "react-router-dom"

class Header extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <div className="flex-between">
          <div>
            <Link to="/"><h2>Exposure System</h2></Link>
          </div>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/signup">SignUp</Link>
                  <Link to="/signin">SignIn</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
