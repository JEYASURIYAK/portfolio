import React from 'react';
import '../App.css';


export default function Skills() {
  return (
    <div className="home-container" id='Skills'>
      <section className='home row Skill-section'>
        <h1>My <span>Skills</span></h1>
        <div className="col-md-6 technical-skills">
          <h3 className='heading1 tech'>Technical <span>Skills</span></h3>
          <div className="technical-bars">
            <div className="bar"><i className='bx bxl-html5'></i>
              <div className="info">
                <span>HTML</span>
              </div>
              <div className="progress-line html">
                <span></span>
              </div>
            </div>
            <div className="bar"><i className='bx bxl-css3'></i>
              <div className="info">
                <span>CSS</span>
              </div>
              <div className="progress-line css">
                <span></span>
              </div>
            </div>
            <div className="bar"><i className='bx bxl-bootstrap'></i>
              <div className="info">
                <span>Bootstrap</span>
              </div>
              <div className="progress-line bootstrap">
                <span></span>
              </div>
            </div>
            <div className="bar"><i className='bx bxl-javascript'></i>
              <div className="info">
                <span>Javascript</span>
              </div>
              <div className="progress-line js">
                <span></span>
              </div>
            </div>
            <div className="bar"><i className='bx bxl-react'></i>
              <div className="info">
                <span>React js</span>
              </div>
              <div className="progress-line react">
                <span></span>
              </div>
            </div>
            <div className="bar">
              <div className="info">
                <span>Express js</span>
              </div>
              <div className="progress-line express">
                <span></span>
              </div>
            </div>
            <div className="bar"><i className="fa-brands fa-node"></i>
              <div className="info">
                <span>Node js</span>
              </div>
              <div className="progress-line node">
                <span></span>
              </div>
            </div>
            <div className="bar"><i className='bx bxl-mongodb'></i>
              <div className="info">
                <span>MongoDB</span>
              </div>
              <div className="progress-line mongodb">
                <span></span>
              </div>
            </div>
            <div className="bar"><i className='bx bxl-mongodb'></i>
              <div className="info">
                <span>UI/UX</span>
              </div>
              <div className="progress-line mongodb">
                <span></span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 professional-skills">
          <h3 className='heading1 prof'>Professional <span>Skills</span></h3>
          <div className="technical-bars">
            <div className="bar">
              <div className="info">
                <span>Creativity</span>
              </div>
              <div className="progress-line express">
                <span></span>
              </div>
            </div>
            <div className="bar">
              <div className="info">
                <span>Communication</span>
              </div>
              <div className="progress-line react">
                <span></span>
              </div>
            </div>
            <div className="bar">
              <div className="info">
                <span>Problem Solving</span>
              </div>
              <div className="progress-line js">
                <span></span>
              </div>
            </div>
            <div className="bar">
              <div className="info">
                <span>Team Work</span>
              </div>
              <div className="progress-line html">
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
