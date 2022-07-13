import React, {useState, useEffect} from 'react'
import './App.css';
import Header from './Header.js'
import {Routes, Route, useLocation, useParams, useNavigate} from "react-router-dom";
import Home from './Home.js'
import Country from './Country.js'
import LeftMenu from './LeftMenu';
import TopMid from './TopMid';
import Footer from './Footer';
import MiddleMenu from './MiddleMenu';
import SearchResults from './SearchResults.js'
import Activity from './Activity.js'

function App() {
  
  const [url, setUrl] = useState("")

  useEffect(() => {
        setUrl(window.location.href)
  }, [url])

  return (
    <div className="App">
      <Header />
      <div className="home">
        <LeftMenu />
        <TopMid url={url} />
      </div> 
      {/* <Routes>
        <Route exact path="/"></Route>
        <Route path="/country">
          <Route path=":country" element={<Country />}>
            <Route path=":city" element={<Country />}/>
          </Route>
        </Route>
        <Route path="search/:results" element={<SearchResults />}></Route>
        <Route path="/:activities" element={<Activity />}></Route>
      </Routes> */}
      <Footer />
    </div>
  );
}

export default App;
