import React, {useState} from 'react'
import { Link } from "react-router-dom";

function Footer() {
    
  return (
    <div className="footer">
        <div>
            <p>Top Cities in France</p>
            <ul>
                <Link to ="country/France/Paris"><li>Paris</li></Link>
                <Link to ="country/France/Nice"><li>Nice</li></Link>
            </ul>
        </div>
        <div>
            <p>Top Cities in Spain</p>
            <ul>
                <Link to ="country/Spain/Madrid"><li>Madrid</li></Link>
                <Link to ="country/Spain/Barcelona"><li>Barcelona</li></Link>
            </ul>
        </div>
        <div>
            <p>Top Cities in Italy</p>
            <ul>
                <Link to ="country/Italy/Milan"><li>Milan</li></Link>
                <Link to ="country/Italy/Venice"><li>Venice</li></Link>
            </ul>
        </div>
        <div>
            <p>Top Cities in Turkey</p>
            <ul>
                <Link to ="country/Turkey/Istanbul"><li>Istanbul</li></Link>
                <Link to ="country/Turkey/Ankara"><li>Ankara</li></Link> 
            </ul>
        </div>
        <div>
            <p>Top Cities in Germany</p>
            <ul>
                <Link to ="country/Germany/Berlin"><li>Berlin</li></Link>
                <Link to ="country/Germany/Munich"><li>Munich</li></Link> 
            </ul>
        </div>
        <div>
            <p>Top Cities in the UK</p>
            <ul>
                <Link to ="country/UK/London"><li>London</li></Link>
                <Link to ="country/UK/Birmingham"><li>Birmingham</li></Link> 
            </ul>
        </div>
        <div>
            <p>Top Cities in Austria</p>
            <ul>
                <Link to ="country/Austria/Vienna"><li>Vienna</li></Link>
                <Link to ="country/Austria/Graz"><li>Graz</li></Link> 
            </ul>
        </div>
        <div>
            <p>Top Cities in Greece</p>
            <ul>
                <Link to ="country/Greece/Athens"><li>Athens</li></Link>
                <Link to ="country/Greece/Thessaloniki"><li>Thessaloniki</li></Link> 
            </ul>
        </div>
    </div>
  );
}

export default Footer;