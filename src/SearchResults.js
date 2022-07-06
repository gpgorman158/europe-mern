import React from 'react'
import { Routes, Route, useParams } from 'react-router-dom';


function SearchResults() {
    
    let { results } = useParams();

  return (
    <div className="results">
        This is a {results} page
    </div>
  );
}

export default SearchResults;