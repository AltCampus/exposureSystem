import React from "react";
import { Link } from "react-router-dom"

class Header extends React.Component {

  handleLogout = () => {
    localStorage.clear()
    this.redirect()
  }

  redirect = () => {
    this.props.history.push("/")
  }

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
                  {
                    localStorage.Token ?
                      <div>
                        <button onClick={this.handleLogout}>Logout</button>
                        <Link to="/signup">SignUp</Link>
                        <Link to="/signin">SignIn</Link>
                      </div>
                      :
                      <div>
                        <Link to="/signup">SignUp</Link>
                        <Link to="/signin">SignIn</Link>
                      </div>

                  }
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
