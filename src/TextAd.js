import React from 'react'
import { useParams, useLocation, useMatch } from 'react-router-dom';

function TextAd ( {results, city}) {

    let pageOptions = {
        "pubId": "partner-pub-1187797442630842", // Make sure this is the correct client ID!
        "query": `${results}`, // Make sure the correct query is placed here!
        "styleId": "5769253257",
        "adsafe": "high"
      };
    
    let adblock1 = {
        "container": "afscontainer1"
    }; 
    window._googCsa('ads', pageOptions, adblock1);
    
  return (
    <>
      <div id="afscontainer1"></div>
      <div className="text-ad">
          {/* This is a {results} {city ? city : null} text ad page <br></br> */}
          <div id="afscontainer2">
              {/* {pageOptions.query} */}Content Coming Soon!
          </div>
      </div>
    </>
  );
}

export default TextAd;