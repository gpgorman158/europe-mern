import React from 'react'
import { useParams } from 'react-router-dom';
import TextAd from "./TextAd.js"


function SearchResults() {
    
  let { results } = useParams();

  return (
    <>
        {/* This is a {results} page */}
        <TextAd results={results}/>
    </>
  );
}

export default SearchResults;