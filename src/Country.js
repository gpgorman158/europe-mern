import React from 'react'
import { useParams } from 'react-router-dom';
import TextAd from "./TextAd.js"



function Country() {
    
  let { city, country } = useParams();

  return (
    <>
    
      <TextAd 
        results={country} 
        city={city}
        /> 
      {/* This is a {country} {city} page */}
      
    </>
  );
}

export default Country;