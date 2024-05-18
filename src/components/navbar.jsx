import React from "react";
import {FaTimes, FaBars} from "react-icons/fa";
import { useRef } from "react";
import { BrowserRouter } from "react-router-dom";
import {HashLink as Link} from "react-router-hash-link";

import "../Styles/Navbar.css";
import shiva from "../images/shiva1.jpg";


function Navbar() {
    const navRef = useRef();
    
    const [mobile, setMobile] = React.useState(false);
    function openNav() {
        navRef.current.classList.toggle("nav-active");
        
    }
    function navclose()
    {
        setMobile(!mobile);
    }
    if(mobile)
    {
        navRef.current.classList.add("nav-active");
    }

   
  

    return(

        <header>
            <div>
            <img src={shiva} alt="logo" className="logo" />
            <h2>Shiva Krishna Reddy Burra</h2>
            </div>
            <nav ref={navRef} className={mobile? "m":"n"}>
            <BrowserRouter>
                <Link className="a" to="#About" smooth onClick={navclose}>HOME</Link>
                <Link className="a" to="#Qualifications" smooth onClick={navclose}>QUALIFICATIONS</Link>
                <Link className="a" to="#Certifications" smooth onClick={navclose}>CERTIFICATIONS</Link>
                <Link className="a" to="#Skills" smooth onClick={navclose}>SKILLS</Link>
                <Link className="a" to="#Projects" smooth onClick={navclose}>PROJECTS</Link>
                <Link className="a" to="#Contact" smooth onClick={navclose}>CONTACT</Link>
            </BrowserRouter>
                <button onClick={openNav} className="nav-btn nav-close-btn"><FaTimes/></button>
            </nav>
            <button onClick={openNav} className="nav-btn" ><FaBars/></button>
        </header>
    );
}

export default Navbar;