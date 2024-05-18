import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "../Styles/Certifications.css";
import c from "../images/c_lang.jpg";
import java from "../images/java.png";
import udemy from "../images/udemy.png";

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
        </Carousel>
    </div>
  );
};
export default Certifications;