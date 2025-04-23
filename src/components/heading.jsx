import React from 'react';
import '../App.css';

export default function Heading() {
  
  return (
    <div className="head">
        <div className="header">
            <a href="#" className='logo'>portfolio</a>


            <div className="nav-bar">
                <a href='#Home'  className='nav-tool'>Home</a>
                <a href='#About'  className='nav-tool'>About</a>
                <a href='#Skills'  className='nav-tool'>Skills</a>
                <a href='#Projects'  className='nav-tool'>Projects</a>
                <a href='#Contact' className='nav-tool'>Contact</a>
            </div>
        </div>
    </div>
    
  )
}
