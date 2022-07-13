import React from 'react'
import { Routes, Route, useParams } from 'react-router-dom';
import TextAd from "./TextAd.js"


function Activity() {
    
    let { activities } = useParams();

  return (
    <div className="results">
        {/* This is a {activities} page */}
        <TextAd results={activities}/>
    </div>
  );
}

export default Activity;