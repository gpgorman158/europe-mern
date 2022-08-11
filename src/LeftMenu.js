import React, {useState} from 'react'
import { Link } from "react-router-dom";

function LeftMenu() {
    const [counties, setCountries] = useState(["France","Spain", "Italy", "Turkey", "Germany", "United Kingdom", "Austria", "Greece", "Netherlands", "Portugal"])

    
  return (
    <div className="left-menu">
      <h1 className="topic">Top Tourist Destinations in Europe</h1>
      <div className="list">{counties.map((country, index) => <ul key={index}>{index + 1}. <Link to={`country/${country}`} >{country}</Link></ul>)}</div>
      
    </div>
  );
}

export default LeftMenu;