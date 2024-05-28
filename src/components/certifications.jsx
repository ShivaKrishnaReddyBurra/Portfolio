import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "../Styles/Certifications.css";
import c from "../images/c_lang.jpg";
import java from "../images/java.png";
import udemy from "../images/udemy.png";
import JavaScript from "../images/JavaScript.png";
import Python from "../images/Python.png";
import SQL_B from "../images/SQL_B.png";
import SQL_I from "../images/SQL_I.png";

const Certifications = () => {
  return (
    <div id="Certifications">
        <h1>Certifications</h1>
        <Carousel>
            <div className='card'>
                <img src={c} />
                <p>C Language</p>
            </div>
            <div className='card'>
                <img src={java} />
                <p>Java</p>
            </div>
            <div className='card'>
                <img src={udemy} />
                <p>Web Development</p>
            </div>
            <div className='card'>
                <img src={JavaScript} />
                <p>JavaScript</p>
            </div>
            <div className='card'>
                <img src={Python} />
                <p>Python</p>
            </div>
            <div className='card'>
                <img src={SQL_B} />
                <p>SQL Basics</p>
            </div>
            <div className='card'>
                <img src={SQL_I} />
                <p>SQL Intermediate</p>
            </div>
        </Carousel>
    </div>
  );
};
export default Certifications;