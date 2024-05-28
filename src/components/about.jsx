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
                <p>I am currently pursuing a B.Tech at Kakatiya Institute of Technology and Science, Warangal, where I am a second-year student in the Computer Science Department. My interest in web development has driven me to gain proficiency in a range of technologies. On the frontend, I have learned HTML, CSS, JavaScript, and React. On the backend, I have learned Node.js, Express.js, and Embedded JavaScript (EJS). Additionally, I have developed skills in working with REST APIs and PostgreSQL, which round out my abilities as a Full Stack Developer.<br></br><br></br>

To validate and enhance my knowledge, I have obtained various certifications from respected platforms. I earned certificates in C Language and Java from NPTEL, and in JavaScript, Python, and SQL from HackerRank. I have also completed courses on Udemy to further my understanding of web development.

<br></br><br></br>In my free time, I enjoy watching anime and playing games, which help me relax and stay creative. </p>
            </div>
        </div>
    );
}

export default About;