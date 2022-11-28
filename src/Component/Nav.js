import React from 'react'
import {Link, Outlet} from 'react-router-dom'

function Nav() {
  return <div className="navbar">
      <Link to="/"><h1>Portfolio</h1></Link>
      <ul className="navbar">
        <Link to="/"><li className="list">Home</li></Link>
        <Link to="/about"><li className="list">About Me</li></Link>
        <Link to="/skills"><li className="list">Skills</li></Link>
        <Link to="/projects"><li className="list">Projects</li></Link>
        <Link to="/contactus"><li className="list">Contact</li></Link>
      </ul>
      <Outlet />
    </div>
}

export default Nav