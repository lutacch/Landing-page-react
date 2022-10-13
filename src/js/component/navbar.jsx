import React from "react";

function Navbar () {
    return (
        <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark d-flex flex-column">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Start Bootstrap
          </a>
          <button class="navbar-toggler" type="button">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    )
}

export default Navbar;