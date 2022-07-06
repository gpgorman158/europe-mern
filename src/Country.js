import React from 'react'
import { Routes, Route, useParams } from 'react-router-dom';


function Country() {
    
    let { country } = useParams();

  return (
    <div className="country">
        This is a {country} page
    </div>
  );
}

export default Country;