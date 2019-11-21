import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <div className="flex-between">
          <div>
            <h2>Exposure System</h2>
          </div>
          <div>
            <nav>
              <ul>
                <li>
                  <a>Sign In</a>
                  <a>Sign Up</a>
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
