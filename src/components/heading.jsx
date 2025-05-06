import React from 'react';
import '../App.css';

export default function Heading() {

  return (
    <div className="head">
      <div className="header">
        <a href="#Home" className='logo'>portfolio</a>
        {/* <div className="nav-bar collapse" id='content'>
          <a href='#Home' className='nav-tool nav-link'>Home</a>
          <a href='#About' className='nav-tool nav-link'>About</a>
          <a href='#Skills' className='nav-tool nav-link'>Skills</a>
          <a href='#Projects' className='nav-tool nav-link'>Projects</a>
          <a href='#Contact' className='nav-tool nav-link'>Contact</a>
        </div>
        <nav className="navbar">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#content" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </nav> */}



        <nav className="navbar navbar-expand-md ">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          
          <div className="collapse nav-bar navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item ">
                <a className="nav-link nav-tool" href="#Home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-tool" href="#About">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-tool" href="#Skills">Skills</a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-tool" href="#Projects">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-tool" href="#Contact">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>

  )
}
