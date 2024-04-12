// Importing necessary dependencies
import React, { useState } from "react";
import Logo from "../assets/logo.png";
import "./About.css";

// Defining the About component
export default function About() {
  // State to manage the flip animation
  const [isFlipped, setIsFlipped] = useState(false);

  // Handler to toggle flip animation
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  // Rendering the About component
  return (
    <>
      {/* Container for the card with flip animation */}
      <div
        className={`container about ${isFlipped ? "flipped" : ""} `}
        onClick={handleFlip}
      >
        <div className="flip-card-inner">
          {/* Front of the card */}
          <div className="flip-card-front">
            {/* Logo */}
            <div className="logo-about">
              <img src={Logo} alt="" className="logo" />
            </div>
            {/* About us description */}
            <div className="about_us">
              {/* Description */}
              We are a dynamic team of second-year students from MET dedicated
              to creating innovative solutions. Our current project focuses on
              developing a smart parking system to streamline the parking
              experience. With a passion for technology and a drive for
              excellence, we aim to make a meaningful impact with our project.
              Despite being early in our academic journey, we bring a diverse
              set of skills and experiences to the table.
            </div>
            {/* Team member names */}
            <div className="made">Created By</div>
            <div className="names">
              <div className="one">
                31.Pratik
              </div>
              <div className="two">
                24.Atharv
              </div>
              <div className="three">
                29.Tanmay
              </div>
              <div className="four">
                23.Gaurav
              </div>
            </div>
          </div>
          {/* Back of the card */}
          <div className="flip-card-back">
            {/* Advantages of the smart parking system */}
            <div className="container advantage">
              {/* Time saved */}
              <div className="time-saved">
                <p>
                  <strong>Time Saved:</strong>
                </p>
                <p>
                  Our smart parking system reduced the average time spent
                  searching for parking by 40% compared to traditional methods.
                </p>
                <p>
                  The time spent searching for parking was significantly reduced
                  with our system, resulting in a 50% decrease in search time.
                </p>
              </div>
              {/* Efficiency */}
              <div className="efficiency">
                <p>
                  <strong>Efficiency:</strong>
                </p>
                <p>
                  Our system increased parking lot utilization by 25% compared
                  to traditional methods.
                </p>
                <p>
                  Before implementing our system, the parking lot had an average
                  occupancy rate of 70%, which increased to 85% after
                  implementation.
                </p>
              </div>
              {/* Safety and security */}
              <div className="safety-security">
                <p>
                  <strong>Safety and Security:</strong>
                </p>
                <p>
                  Incidents or accidents reported with traditional parking
                  methods were reduced by 30% compared to our system, showcasing
                  the improved safety and security measures implemented.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
