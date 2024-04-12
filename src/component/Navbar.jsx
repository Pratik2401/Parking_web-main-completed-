// Importing React and CSS file for styling
import React from "react";
import "./Navbar.css";

// Defining the Navbar component
export default function Navbar(props) {
  // Rendering the Navbar component
  return (
    <>
      {/* Bootstrap Navbar */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          {/* Navbar toggle button */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* Navbar collapse */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* Home link */}
              <li className="nav-item d-flex">
                <a
                  className={`nav-link ${
                    props.page === "home" ? "active" : null
                  }`}
                  aria-current="page"
                  href="#"
                  onClick={() => {
                    props.setPage("home");
                  }}
                >
                  Home
                </a>
              </li>
              {/* About link */}
              <div className="right"></div>
              <li className="nav-item d-flex">
                <a
                  className={`nav-link ${
                    props.page === "about" ? "active" : null
                  }`}
                  href="#"
                  onClick={() => {
                    props.setPage("about");
                  }}
                >
                  About
                </a>
              </li>
              {/* Admin link */}
              <div className="right"></div>
              <li className="d-flex">
                <a
                  className={`nav-link ${
                    props.page === "login" ? "active" : null
                  }`}
                  href="#"
                  aria-current="page"
                  onClick={() => {
                    props.setPage("login");
                  }}
                >
                  Admin
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
