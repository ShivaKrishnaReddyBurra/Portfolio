import React from 'react';
import Navbar from './components/navbar';
import "./Styles/App.css";
import About from"./components/about";
import Qualification from './components/qualification';
import Certifications from './components/certifications';
import Skills from './components/skills';
import Projects from './components/projects';
import Contact from './components/contact';
function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Qualification />
      <Certifications />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
