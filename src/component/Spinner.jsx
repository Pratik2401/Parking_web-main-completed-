// Importing React and CSS file for styling
import React from "react";
import "./Spinner.css";

// Defining the Spinner component
function Spinner() {
  return (
    // Container for the spinner, using Bootstrap classes for centering
    <div className="spin d-flex justify-content-center">
      {/* Actual spinner element */}
      <div className="spinner-grow" role="status">
        {/* Visually hidden text for accessibility */}
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

// Prop types validation for Spinner component
Spinner.propTypes = {};

// Exporting the Spinner component
export default Spinner;
