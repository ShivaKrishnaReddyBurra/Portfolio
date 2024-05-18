import React from "react";
import "../Styles/Skills.css";
import c from "../images/C.png";
import j from "../images/J.png";
import html from "../images/html.png";
import css from "../images/css.png";
import js from "../images/js.png";
import react from "../images/reactr.jpeg";
import python from "../images/python.jpeg";
import node from "../images/node.png";
import sql from "../images/sql.png";


function Skills() {
    return(
        <div className="sec-4 " id="Skills">
        <div className="head">
            <h1>SKILLS</h1>
        </div>
        <div className="S">
            <div className="con">
                <img src={c}/>
                <h2>C Language</h2>
            </div>
            <div className="con">
                <img src={j}/>
                <h2>Java</h2>
            </div>
            <div className="con">
                <img src={python}/>
                <h2>Python</h2>
            </div>
            <div className="con">
                <img src={html}/>
                <h2>HTML</h2>
            </div>
            <div className="con">
                <img src={css}/>
                <h2>CSS</h2>
            </div>
            <div className="con">
                <img src={js}/>
                <h2>JavaScript</h2>
            </div>
            <div className="con">
                <img src={react}/>
                <h2>ReactJS</h2>
            </div>
            <div className="con">
                <img src={node}/>
                <h2>NodeJS</h2>
            </div>
            <div className="con">
                <img src={sql}/>
                <h2>SQL</h2>
            </div>
        </div>
    </div>
    );

}

export default Skills;