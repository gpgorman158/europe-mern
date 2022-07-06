import React, {useState} from 'react'
import { Link } from "react-router-dom";

function LeftMenu() {
    const [counties, setCountries] = useState(["France","Spain", "Italy", "Turkey", "Germany", "United Kingdom", "Austria", "Greece", "Russia", "Portugal"])

    
  return (
    <div className="left-menu">
      <h1 className="topic">Countries in Europe</h1>
      <div className="list">{counties.map(country => <ul><Link to={country}>{country}</Link></ul>)}</div>
      
    </div>
  );
}

export default LeftMenu;