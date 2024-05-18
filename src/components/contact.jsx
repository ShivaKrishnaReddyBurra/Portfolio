import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,faInstagram,faLinkedin,faGithub } from '@fortawesome/free-brands-svg-icons';
import "../Styles/Contact.css";

function Contact() {
    return(
        <div className="sec-6" id="Contact">
        <div className="head">
            <h1>CONTACT</h1>
        </div>
        <div className="C1">
            <div className="c1">
                <h2>Phone:</h2>
                <a href="tel:+91 7780382929">+91 7780382929</a>
            </div>
            <div className="c2">
                <h2>Email:</h2>
                <a href="mailto:reddyburrashivakrishna@gmail.com?subject=SendMail&body=Description">reddyburrashivakrishna@gmail.com</a>
            </div>
        </div>
            <div className="C2">
               <a href="https://www.facebook.com/shivakrishnareddy.burra" target="_blank" rel="noreferrer" className="logo">
                     <FontAwesomeIcon icon={faFacebook} size="3x" color="black"/>
                </a>
                <a href="https://www.instagram.com/shivkrish_1624/" target="_blank" rel="noreferrer" className="logo">
                    <FontAwesomeIcon icon={faInstagram} size="3x" color="black"/>
                </a>
                <a href="https://www.linkedin.com/in/shiva-krishna-reddy-burra-420b9429a/" target="_blank" rel="noreferrer" className="logo">
                    <FontAwesomeIcon icon={faLinkedin} size="3x" color="black"/>
                </a>
                <a href="https://github.com/ShivaKrishnaReddyBurra" target="_blank" rel="noreferrer" className="logo">
                    <FontAwesomeIcon icon={faGithub} size="3x" color="black"/>
                </a>
            </div>

    </div>
    );
}

export default Contact;