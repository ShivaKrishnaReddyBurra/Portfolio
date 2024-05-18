import React from "react";
import shiva from "../images/shiva1.jpg";
import "../Styles/About.css";

function About() {
    return(
        <div className="sec-1">
            <div className="img1">
                <img src={shiva} alt="Shiva Krishna Reddy Burra" />
            </div>
            <div className="text">
                <h1>Shiva Krishna Reddy Burra</h1>
                <p>I am currently pursuing B.Tech at Kakatiya Institute of Technology and Science, Warangal, as a second-year student in the Computer Science Department.

                    I obtained certifications in the C language and Java through NPTEL. Due to my interest in web development, I learned HTML, CSS, and JavaScript as part of the FrontEnd. Currently, I am focusing on the BackEnd to become a Full Stack Developer.
                
                     My hobbies include watching anime and playing games. </p>
            </div>
        </div>
    );
}

export default About;