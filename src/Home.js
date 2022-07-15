import React from 'react'
// import LeftMenu from './LeftMenu.js'
import MiddleMenu from './MiddleMenu.js'
import TopMid from './TopMid.js'
import Footer from './Footer.js'
import LeftMenu from './LeftMenu';
import SearchResults from './SearchResults'
import Header from './Header'

function Home( {url} ) {


  return (
    // <div className="App">
    //   <Header />
    //   <div className="home">
    //     <LeftMenu />
    //     <TopMid url={url} key={window.location.pathname}/>
    //   </div>
    //   <Footer />
    // </div>


    <>
      {url === "http://europe.com/" ? <MiddleMenu /> : null }
    </>
  );
}

export default Home;