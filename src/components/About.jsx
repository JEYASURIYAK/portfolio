import React from 'react';
import '../App.css';

export default function About() {
  return (
    <div className="home-container about-container" id='About'>
      <section className='home about row' >
          <div className="home-content col-md-6 w-30 h-75">
            <img src="photo.jpg" alt="#" className='img-fluid image' />
          </div>
          <div className="col-md-6 about-content">
            <h1>About <span>Me</span></h1>
            <h3>Front-end Developer | MERN-stack Developer | Web Developer</h3>
            <p>🌟 Crafting pixel-perfect user experiences with React.js—let’s connect and make web magic together! 🌐 A frontend maestro from Sivakasi. My career kick-started post my education at P.S.R. Engineering College and flowed into a series of impactful projects.
              From building scalable websites for land brokerage to revolutionizing online medical consultations and streamlining e-commerce operations, I tackle projects big and small with equal passion. My toolbelt? A robust command over HTML, CSS, JavaScript, and an intricate understanding of React.js, Next.js, and Redux.
              Beyond the code, I thrive in dynamic environments where continuous learning is intertwined with practical application. I’ve also dipped my toes into mentoring, helping novices get a grip on frontend basics and beyond.
              Immersed in the world of development, I continuously fine-tune my skills through practical projects and certifications, staying ahead in this fast-evolving field.</p>
            <a href="" className='btn-box about-btn'>More About Me</a>
          </div>
      </section>
    </div>
  )
}
