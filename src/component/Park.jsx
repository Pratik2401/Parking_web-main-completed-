// Importing necessary dependencies
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

// Importing CSS file for styling
import "./Park.css"; 

// Importing image asset
import car from '../assets/car.png';

// Defining the Park component
function Park(props) {
  // State to manage CSS properties dynamically
  const [css, setCss] = useState({
    border: "2px dotted gray",
    color: "transparent",
  });

  // Effect hook to update CSS based on props.status changes
  useEffect(() => {
    if (props.status ==="1") {
      setCss({
        border: "2px none gray",
        color: "rgb(0, 204, 135)"
      });
    } else if (props.status === "0") {
      setCss({
        border: "2px none gray",
        color: "#ff007b",
      });
    } else if (props.status === "2") {
      setCss({
        border: "2px dotted gray",
        color: "transparent"
      });
    }
  }, [props.status]);

  // Rendering the Park component
  return (
    <div className="card site" style={{ backgroundColor: css.color, border: css.border }}>
      {/* Rendering the car image if status is not 2 */}
      {props.status !== "2"  && (
        <img 
          src={car} 
          className="card-img-top car" 
          alt="..." 
          style={{
            // Applying animation based on status
            animation: props.status === "0" ? "slideIn 1.5s ease forwards" : "slideOut 1.5s ease forwards"
          }}
        />
      )}
      <div className="card-body">
        {/* Rendering siteName if status is not 2 */}
        <h5 className="card-title">
          {props.status !== "2" ? props.siteName : "N/A"}
        </h5>
      </div>
    </div>
  );
}

// PropTypes validation for Park component
Park.propTypes = {
  status: PropTypes.string.isRequired, // Status should be a number and is required
  siteName: PropTypes.string.isRequired // Site name should be a string and is required
};

// Exporting the Park component
export default Park;
