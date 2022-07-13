import React from 'react'
import { Routes, Route, useParams } from 'react-router-dom';
import TextAd from "./TextAd.js"
import LeftMenu from './LeftMenu.js'
import TopMid from './TopMid.js'


function Country() {
    
  let { city, country } = useParams();

  return (
    <div>
    
      <TextAd results={country} city={city}/>
      {/* This is a {country} {city} page */}
      
    </div>
  );
}

export default Country;