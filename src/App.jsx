import React from 'react';
import Heading from './components/heading.jsx';
import './App.css';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';

function App() {
  return (
    <div className="App">
      <Heading/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      
      
    </div>
  );
}

export default App;
