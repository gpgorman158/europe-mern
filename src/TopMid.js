import React, {useState, useEffect} from 'react'
import { Link, useLocation, Routes, Route, useParams } from 'react-router-dom';
import MiddleMenu from './MiddleMenu';
import Home from './Home.js'
import TextAd from './TextAd.js'
import SearchResults from './SearchResults';
import Country from './Country.js'
import Activity from './Activity.js'


function TopMid( {url} ) {

    // let something = useParams()

    // function switchList (){
    //     switch (url) {
    //         case `http://localhost:3000/country/${something}`:
    //             return <Country />
    //         case `http://localhost:3000/search/${something}`:
    //             return <SearchResults />
    //         default:
    //             return <Home url={url}/>;

    // }
    // }

  return (
    <>
        <div className="top-mid"><p className="popular">Popular...</p>
            <div className="middle-container">
                <Link to="/hotels"><div className="hotels">Hotels
                    <svg viewBox="0 0 24 24" width="40px" height="40px" className="d Vb UmNoP"><path d="M20.587 12.139V4.144H3.424v7.986A3.805 3.805 0 002 15.097v4.755h1.906v-1.905h16.188v1.91H22v-4.76a3.804 3.804 0 00-1.413-2.958zm-1.906-6.09V8.83a5.048 5.048 0 00-2.865-.876c-1.565 0-2.952.69-3.816 1.749-.864-1.059-2.252-1.749-3.818-1.749-1.07 0-2.056.324-2.851.866V6.049h13.35zm-.258 5.248c-.077-.005-.155-.012-.234-.012h-4.971c.438-.838 1.437-1.426 2.598-1.426 1.168 0 2.173.593 2.607 1.438zm-7.643-.012H5.812c-.081 0-.159.007-.238.012.434-.844 1.438-1.438 2.606-1.438 1.163 0 2.163.588 2.6 1.426zM3.906 16.04v-.943c0-1.051.855-1.905 1.906-1.905h12.376c1.051 0 1.905.854 1.905 1.905v.943H3.906z"></path></svg>
                </div></Link>
                <Link to="/flights"><div className="flights">Flights
                    <img width="40px" height="40px" src="https://icon-library.com/images/airplane-icon-png/airplane-icon-png-4.jpg" alt="flights icon"></img>
                </div></Link>
                <Link to="/activities"><div className="activities">Activities
                    <svg viewBox="0 0 24 24" width="40px" height="40px" className="d Vb UmNoP" x="0" y="0"><circle cx="12" cy="8.5" r="1"></circle><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="15.5" r="1"></circle><path d="M20 6.5V8c-1.5.7-2.5 2.3-2.5 4 0 1.8 1 3.3 2.5 4v1.5H4V16c1.5-.7 2.5-2.3 2.5-4 0-1.8-1-3.3-2.5-4V6.5h16m2-2H2v5c1.4 0 2.5 1.1 2.5 2.5S3.4 14.5 2 14.5v5h20v-5c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5v-5z"></path></svg>
                </div></Link>
                <Link className="restaurants" to="/restaurants"><div className= "restaurants">Restaurants
                    <svg viewBox="0 0 24 24" width="40px" height="40px" className="d Vb UmNoP"><path d="M18.753 21.459l-5.502-5.504-2.85 2.851-1.663-1.662-4.315 4.315-1.343-1.344 4.316-4.316-4.004-4.003A4.718 4.718 0 012 8.438c0-1.269.494-2.461 1.392-3.358l.834-.835 7.362 7.362.866-.866c-1.099-1.719-.777-3.972.912-5.661l2.538-2.538 1.343 1.344-2.538 2.537c-.785.787-1.254 1.903-.852 2.916l4.423-4.422 1.343 1.344-4.429 4.428c.31.13.64.188.977.164.646-.043 1.299-.364 1.838-.904a630.937 630.937 0 002.642-2.653L22 8.631s-1.241 1.255-2.647 2.66c-.865.865-1.951 1.383-3.057 1.456a4.027 4.027 0 01-2.501-.66l-.864.862 7.166 7.166-1.344 1.344zM4.291 6.995A2.835 2.835 0 003.9 8.438c0 .762.296 1.478.835 2.015l5.666 5.667 1.506-1.507-7.616-7.618z"></path></svg>
                </div></Link>

            </div>
            <Routes>
                <Route exact path="/" element={<Home url={url}/>}></Route>
                <Route path="/country">
                <Route path=":country" element={<Country />}>
                    <Route path=":city" element={<Country />}/>
                </Route>
                </Route>
                <Route path="search/:results" element={<SearchResults />}></Route>
                <Route path="/:activities" element={<Activity />}></Route>
            </Routes>
            {/* {url === "http://localhost:3000/" ? <Home url={url}/> : null } */}
            {/* {switchList()} */}
            
        </div> 
    </>
  );
}

export default TopMid;