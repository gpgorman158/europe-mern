import React, {useState} from 'react'
import { Link } from "react-router-dom";

function Header ( {onSearch}){
    const [localSearch, setLocalSearch] = useState("")

    function handleSearch (e){
        e.preventDefault()
        onSearch(localSearch)
        setLocalSearch("")
        
    }

    return (
        <div className="header">
            <Link to="/"><img className="logo" src={'../Europe-Logo-main-blue.png'} alt="Europe.com Logo"></img></Link>
            <form onSubmit={handleSearch} role="search">
                <div className="form-holder">
                    <input onChange={(e) => setLocalSearch(e.target.value)} value={localSearch} id="search" type="text" placeholder="Search destinations..." />
                    <button className="btn" type="submit">
                        <i className="fa fa-search"></i>
                    </button> 
                </div>   
            </form>
            {/* <div>Right nav placeholder, if anything</div> */}
        </div>
    )
}
export default Header;