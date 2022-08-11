import React from 'react'
import { useParams } from 'react-router-dom';
import TextAd from "./TextAd.js"


function Activity() {
    
    let { activities } = useParams();

  return (
    <>
        {/* This is a {activities} page */}
        <TextAd results={activities}/>
    </>
  );
}

export default Activity;