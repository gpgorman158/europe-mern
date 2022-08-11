import React from 'react'
import { Link } from "react-router-dom";

function MiddleMenu() {

  return (
    <div className="middle-menu">
        <div className="middle-menu-post">
          <img width="103%" height="auto" src={'../europe-paris-hotel_273x205.jpg'} alt=""></img>
          <div className="middle-menu-links">
            <Link to="hotels-paris"><h4 className="header-middle">Best Hotels in Paris</h4></Link>
            <Link to="hotels-paris"><p>Explore &#8594;</p></Link>
          </div>
        </div>
        <div className="middle-menu-post">
          <img width="100%" height="auto" src={'../europe-barcelona-home-correct-size_273x205.jpg'} alt=""></img>
          <div className="middle-menu-links">
            <Link to="flights-barcelona"><h4 className="header-middle">Flights to Barcelona</h4></Link>
            <Link to="flights-barcelona"><p>View Flights &#8594;</p></Link>
          </div>
        </div>
        <div className="middle-menu-post">
          <img width="103%" height="auto"src={"../cocktails-in-rome-the-court-colosseum.jpg_273x205.webp"} alt=""></img>
          <div className="middle-menu-links">
            <Link to="restaurants-rome"><h4 className="header-middle">Top Restaurants in Rome</h4></Link>
            <Link to="restaurants-rome"><p>Explore &#8594;</p></Link>
          </div>
        </div>
    </div>
  );
}

export default MiddleMenu;