import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {Button} from './Button';
import './Navbar.css'

function Navbar(){
    const[click, setClick] = useState(false)
    const[button, setButton] = useState(true)


    const showOrHideButton = ()=>{
        if(window.innerWidth <= 960 ) setButton(false)
        else setButton(true)
    }
    const handleClick = ()=> setClick(!click)
    const closeMobileMenu = ()=> console.log("clicked")
  

    window.addEventListener("resize",showOrHideButton)
  
  return (
<>
    <nav className="navbar">
        <div className="navbar-container">
            <Link to="/" className="navbar-logo">
                MYSTERIESHOUSE <i class="fas fa-grimace"></i>
            </Link>
        </div>

        <div className="menu-icon" onClick={handleClick}>
            <i className= {click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className = "nav-item">
                <Link to="/" className="nav-links" onClick = {closeMobileMenu}>
                    Home
                </Link>
            </li>

            <li className = "nav-item">
                <Link to="/services" className="nav-links" onClick = {closeMobileMenu}>
                    Services
                </Link>
            </li>

            <li className = "nav-item">
                <Link to="/products" className="nav-links" onClick = {closeMobileMenu}>
                    Products
                </Link>
            </li>

            <li className = "nav-item">
                <Link to="/aboutUs" className="nav-links" onClick = {closeMobileMenu}>
                   About Us
                </Link>
            </li>
        </ul>
        

    {button ? <Button buttonStyle = "btn--outline" buttonSize = "btn--large">SIGN UP</Button> : null}

      
        
    </nav>
    
    </>
    )
       
    
}


export default Navbar;