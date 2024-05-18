import React from "react";
import "../Styles/Projects.css";

function Projects() {
    return(
        <div className="sec-5" id="Projects">
        <div className="head">
            <h1>PROJECTS</h1>
        </div>
        <div className="P1">
            <a href="https://shivakrishnareddyburra.github.io/My_FirstWeb/" ><h2>Anime Theme Song Website</h2></a>
            <p>It is a website that contains the theme songs of various anime. It is developed using HTML, CSS, and JavaScript.</p>
        </div>
        <div className="P2">
            <a href="https://shivakrishnareddyburra.github.io/CALCULATOR/"><h2>Calculator</h2></a>
            <p>It is a simple calculator developed using HTML, CSS, and JavaScript.</p>
        </div>
        <div className="P3">
            <a href="https://shivakrishnareddyburra.github.io/Drive_Dynamos_forSumShodhini-23/"><h2>Drive Dynamnos</h2></a>
            <p>It is a website developed for the event "SumShodhini-23" conducted by the Department of  Electronics and Communication Engineering, KITSW.</p>
        </div>
    </div>
    );

}

export default Projects;