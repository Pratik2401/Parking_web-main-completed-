// Importing necessary dependencies
import React, { useState, useEffect, useContext } from "react";
import "./Admin.css";
import Park from "./Park";
import { SitesContext } from "./Data";

// Defining the Admin component
function Admin(props) {
  // Rendering the Admin component
  const sites=useContext(SitesContext)
  console.log(sites)
  return (
    <>
      {/* Heading section */}
      <div className="heading">
        <p className="head-admin">Welcome to Online Car Parking System</p>
        <div className="info-admin">
          {/* Admin icon */}
          <svg
            width="30px"
            height="64px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M12.1601 10.87C12.0601 10.86 11.9401 10.86 11.8301 10.87C9.45006 10.79 7.56006 8.84 7.56006 6.44C7.56006 3.99 9.54006 2 12.0001 2C14.4501 2 16.4401 3.99 16.4401 6.44C16.4301 8.84 14.5401 10.79 12.1601 10.87Z"
                stroke="#cbc0cd"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M7.15997 14.56C4.73997 16.18 4.73997 18.82 7.15997 20.43C9.90997 22.27 14.42 22.27 17.17 20.43C19.59 18.81 19.59 16.17 17.17 14.56C14.43 12.73 9.91997 12.73 7.15997 14.56Z"
                stroke="#cbc0cd"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </g>
          </svg>
          {/* Displaying the username */}
          <span className="name-admin">{props.user}</span>
          {/* Logout button */}
          <button
            className="log_out"
            onClick={() => {
              props.setAccess(0);
              props.setPage("login");
            }}
          >
            LogOut
          </button>
        </div>
      </div>

      {/* Indication and parking section */}
      <div className="indication">
        {/* Instructions section */}
        <div className="instruction">
          <article className="green">
            <div className="g_color"></div>Not occupied
          </article>
          <article className="red">
            <div className="r_color"></div> Occupied
          </article>
        </div>
        {/* Parking sites section */}
        <div className="parking">
          {/* Mapping through parking sites and rendering Park component for each */}
          {sites.map((element) => (
            <Park
              key={element.siteName}
              siteName={element.siteName}
              status={element.status}
            />
          ))}
        </div>
      </div>
    </>
  );
}

// Exporting the Admin component
export default Admin;
