// Importing necessary CSS file and components
import "./App.css";
import Admin from "./component/Admin";
import Login from "./component/Login";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import About from "./component/About";
import { SitesProvider } from "./component/Data";
// Importing useState and useEffect hooks from React
import { useState, useEffect } from "react";

// Importing the Spinner component
import Spinner from "./component/Spinner";

// Defining the main App component
function App() {
  // State variables
  const [page, setPage] = useState("home"); // Manages the current page
  const [access, setAccess] = useState(0); // Manages access level (0: guest, 1: admin)
  const [user, setUser] = useState(""); // Manages the user information
  const [show, setShow] = useState({ showPage: true, showSpinner: false }); // Manages whether to show the page content or the spinner





  // Effect hook to manage showing spinner during page transitions
  useEffect(() => {
    // Displaying the spinner and hiding the page content
    setShow({ showPage: false, showSpinner: true });

    // Setting a timer to simulate loading time
    const timer = setTimeout(() => {
      // Hiding the spinner and displaying the page content after 600 milliseconds
      setShow({ showPage: true, showSpinner: false });
    }, 600);

    // Cleaning up the timer
    return () => clearTimeout(timer);
  }, [page]);


  
  // Effect hook to ensure spinner is hidden on initial render
  useEffect(() => {
    setShow({ showPage: true, showSpinner: false });
  }, []);

  // Destructuring show object
  const { showPage, showSpinner } = show;

  // Rendering the components based on the current page and access level
  return (
    <>
    <SitesProvider>
      <div className="whole">
        {/* Navbar component */}
        {page!=="log"?(<Navbar setPage={setPage} page={page} />):null}
        
        {/* Rendering spinner if showSpinner is true */}
        {showSpinner && <Spinner />}
        
        {/* Rendering Login component if page is 'login' and access is 0 */}
        {page === "login" && access === 0 && showPage ? (
          <Login setAccess={setAccess} setUser={setUser} setPage={setPage} />
        ) : null}
        
        {/* Rendering Admin component if page is 'log' and access is 1 */}
        {page === "log" && access === 1 && showPage ? (
          <Admin user={user} setAccess={setAccess} setPage={setPage} />
        ) : null}
        
        {/* Rendering Home component if page is 'home' */}
        {page === "home" && showPage ? <Home /> : null}
        
        {/* Rendering About component if page is 'about' */}
        {page === "about" && showPage ? <About /> : null}
      </div>
      </SitesProvider>
    </>
  );
}

// Prop types validation for Spinner component
Spinner.propTypes = {};
export default App;
