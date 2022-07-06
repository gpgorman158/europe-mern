import React from 'react'
import { Link } from "react-router-dom";

function MiddleMenu() {
  return (
    <div className="middle-menu">
        <div><Link to="hotels">Hotels</Link></div>
        <div><Link to="flights">Flights</Link></div>
        <div><Link to="activities">Activities</Link></div>
        <div><Link to="restaurants">Restaurants</Link></div>
    </div>
  );
}

export default MiddleMenu;