import React from 'react'
// import LeftMenu from './LeftMenu.js'
import MiddleMenu from './MiddleMenu.js'


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
      {url === "https://europe.com/" ? <MiddleMenu /> : null }
    </>
  );
}

export default Home;