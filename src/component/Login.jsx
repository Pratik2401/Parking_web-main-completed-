// Importing necessary dependencies
import React, { useRef, useState } from "react";
import "./login.css";

// Defining the Login component
export default function Login(props) {
  // State to manage user input values
  const [userValue, setUserValue] = useState("");
  const [passValue, setPassValue] = useState("");

  // Ref to focus on password input after username is entered
  const go_to_pass = useRef(null);

  // Handler for user input change
  const handleUserChange = (event) => {
    setUserValue(event.target.value);
  };

  // Handler for password input change
  const handlePassChange = (event) => {
    setPassValue(event.target.value);
  };

  // Handler for pressing enter on username input
  const handleEnterUser = (e) => {
    if (e.key === "Enter") {
      go_to_pass.current.focus();
    }
  };

  // Handler for pressing enter on password input
  const handleEnterPass = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  // Handler for form submission
  const handleSubmit = () => {
    // Checking credentials
    if (userValue === "admin" && passValue === "admin") {
      // Setting access level and navigating to admin page
      props.setPage("log");
      props.setAccess(1);
      props.setUser(userValue);

      // Toast notification for successful sign-in
      const Toast = Swal.mixin({
        toast: true,
        position: "top",
        showConfirmButton: false,
        timer: 600,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      Toast.fire({
        icon: "success",
        title: "Signed in successfully",
      });
    } else {
      // Toast notification for incorrect credentials
      const Toast = Swal.mixin({
        toast: true,
        position: "top",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      Toast.fire({
        icon: "error",
        title: "Username or password is wrong",
      });
    }
  };

  // Rendering the Login component
  return (
    <>
      {/* Header */}
      <h1 className="name-login">SpotSeeker</h1>

      {/* Main content */}
      <div className="center">
        <div className="login">
          {/* Login form */}
          <h2 className="head">Login</h2>
          <div className="user">
            {/* Username input */}
            <input
              type="text"
              placeholder="User Name"
              value={userValue}
              onChange={handleUserChange}
              onKeyPress={handleEnterUser}
              autoFocus
            />
          </div>
          <div className="pass">
            {/* Password input */}
            <input
              type="password"
              placeholder="Password"
              value={passValue}
              onChange={handlePassChange}
              onKeyPress={handleEnterPass}
              ref={go_to_pass}
            />
          </div>
          {/* Submit button */}
          <button className="log" onClick={handleSubmit}>
            LOGIN
          </button>
        </div>
      </div>
    </>
  );
}
