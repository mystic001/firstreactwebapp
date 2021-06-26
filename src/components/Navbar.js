import React, {useState} from 'react';
import {Link} from "react-router-dom";

function Navbar(){
    const[click, setClick] = useState(false)


    const handleClick = ()=> setClick(!click)
    return (
<>
    
    <nav className="navBar">
        <div className="navBar-Container">
            <Link to="/" className="navBar-logo">
                MYSTERIESHOUSE <i class="fas fa-grimace"></i>
            </Link>
        </div>

        <div onClick={handleClick}>
            <i className= {click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
    <div></div>
    </nav>
    
    </>
    )
       
    
}


export default Navbar;