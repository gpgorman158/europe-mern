import React from 'react'


function TextAd ( {results, city}) {

  let urlArray = window.location.href.split('/')
  
  function resultsCase (result, city){
    
        if (window.location.href.includes('search')){
          return result
        }
        else if (urlArray.length === 6){
          return 'travel to ' + city
        }
        else if (window.location.href.includes('country')){
          return 'travel to ' + result
        } 
        else if (result === 'hotels-paris'){
          return 'hotels in paris'
        }
        else if (result === 'flights-barcelona'){
          return 'flights to barcelona'
        }
        else if (result === 'restaurants-rome'){
          return 'best restaurants in rome'
        }
        else if (result === 'hotels'){
          return 'best hotels in Europe'
        }
        else if (result === 'flights'){
          return 'flights to europe'
        }
        else if (result === 'activities'){
          return 'activities in europe'
        }
        else if (result === 'restaurants'){
          return 'best restaurants in europe'
        }
        else {
          return 'travel europe'
        }
  }
  
  
    let pageOptions = {
        "pubId": "partner-pub-1187797442630842", // Make sure this is the correct client ID!
        "query": `${resultsCase(results, city)}`, // Make sure the correct query is placed here!
        "styleId": "6323370374",
        "adsafe": "high"
      };
    
    let adblock1 = {
        "container": "afscontainer1"
    }; 
    window._googCsa('ads', pageOptions, adblock1);
    
  return (
    <>
      <div id="afscontainer1"></div>
      
    </>
  );
}

export default TextAd;