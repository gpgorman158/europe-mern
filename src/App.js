import React, {useState, useEffect} from 'react'
import './App.css';
import Header from './Header.js'
import {useNavigate} from "react-router-dom";
import LeftMenu from './LeftMenu';
import TopMid from './TopMid';
import Footer from './Footer';
import AdSense from 'react-adsense';

function App() {
  
  const [url, setUrl] = useState("")

  useEffect(() => {
        setUrl(window.location.href)
  }, [url])

  const [search, setSearch] = useState("")

  let navigate = useNavigate();

  function onSearch (search) {
      setSearch(search)
      navigate(`search/${search}`)
  }

  return (
    <div className="App">
      <Header onSearch={onSearch} />
      <div className="home">
        <LeftMenu />
        <TopMid url={url}/>
      </div> 
      <Footer />
    </div>
  );
}

export default App;
