import React, { useContext } from "react";
import "./Home.css";
import laptopImage from "../assets/laptop.png";
import Typed from "typed.js";
import { SitesContext } from "./Data";

export default function Home() {
  const el = React.useRef(null);
  const sites=useContext(SitesContext)
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "From Street to Spot, We Got the Lot!",
        "Simplify Parking, on the Dot",
      ],
      typeSpeed: 70,
    });

    return () => {
      typed.destroy();
    };
  }, []);


  // Ensure props.sites is defined before accessing its properties
  const availableSpots = sites ? sites.filter(site => parseInt(site.status) === 1).length : 0;
  return (
    <>
      <div className="adjust">
        <div className="information">
          <div className="name-home">SpotSeeker</div>
          <div className="description">
            <span ref={el} className="slogan" />
          </div>
          <div className="place">
            Place:<span className="add">ABC</span>
          </div>

          <div className="park">
            Number Of Available Spots:{ sites!==null?<span className="spots">{availableSpots}</span>:null}
          </div>
        </div>
        <img src={laptopImage} className="img-fluid" alt="no image" />
      </div>
    </>
  );
}
