import React from 'react'
import { Link } from "react-router-dom";

function MiddleMenu() {

  return (
    <div className="middle-menu">
        <div>
          <img width="100%" height="auto" src="https://content.r9cdn.net/himg/5b/cc/8b/ice-100053252-0746998_3XL-452362.jpg" alt=""></img>
          <div className="middle-menu-links">
            <Link to="hotels"><h4 className="header-middle">Best Hotels in Paris</h4></Link>
            <Link to="hotels"><p>Explore &#8594;</p></Link>
          </div>
        </div>
        <div>
          <img width="130%" height="auto" src="https://www.avianca.com/content/dam/avianca_new/destinos/bcn/eu_bcn_ciudad-03_2880_1620.jpg" alt=""></img>
          <div className="middle-menu-links">
            <Link to="flights"><h4 className="header-middle">Flights to Barcelona</h4></Link>
            <Link to="flights"><p>View Flights &#8594;</p></Link>
          </div>
        </div>
        <div>
          <img width="117%" height="auto"src="https://media-cdn.tripadvisor.com/media/photo-s/13/06/be/61/the-gritti-terrace.jpg" alt=""></img>
          <div className="middle-menu-links">
            <Link to="restaurants"><h4 className="header-middle">Top Restaurants in Venice</h4></Link>
            <Link to="restaurants"><p>Explore &#8594;</p></Link>
          </div>
        </div>
    </div>
  );
}

export default MiddleMenu;