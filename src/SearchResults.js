import React from 'react'
import { Routes, Route, useParams } from 'react-router-dom';
import TextAd from "./TextAd.js"


function SearchResults() {
    
    let { results } = useParams();

  return (
    <div className="results">
        {/* This is a {results} page */}
        <TextAd results={results}/>
    </div>
  );
}

export default SearchResults;