import React, {useState} from 'react'
import { Link, useNavigate } from "react-router-dom";

function Header (){
    const [search, setSearch] = useState("")

    let navigate = useNavigate();

    function onSearch (e){
        e.preventDefault()
        navigate(`search/${search}`)
        setSearch("")  
    }


    return (
        <div className="header">
            <Link to="/"><img className="logo" src={'../Europe-Logo-main-blue.png'} alt="Europe.com Logo"></img></Link>
            <form onSubmit={onSearch} role="search">
                <div className="form-holder">
                    <input onChange={(e) => setSearch(e.target.value)} value={search} id="search" type="text" placeholder="Search destinations..." />
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