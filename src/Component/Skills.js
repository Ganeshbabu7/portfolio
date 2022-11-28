import React from 'react'
import Heading from './Heading'
import HTMLlogo from '../Asset/Html.png'
import CSSlogo from '../Asset/Css.png'
import Bootstraplogo from '../Asset/Bootstrap.png'
import JSlogo from '../Asset/JS.png'
import Reactjslogo from '../Asset/Reactjs.png'
import Nodejslogo from '../Asset/Nodejs.png'
import MySQLlogo from '../Asset/MySQL.png'
import MongoDBlogo from '../Asset/MongoDB.png'
import Githublogo from '../Asset/Github.png'
import VSCodelogo from '../Asset/VSCode.png'

function Skills() {
  let title = [{name : "Your'e Welcome..."}, {name : "To Communicate With Web"}, {name : "All Creative Work Selected Projects"}, {name:"Lets Be Friends"}]
  return <>
     <Heading data={title[1]}/>
     <div className="skills">
      <div className="skill">
        <div>
          <img src={HTMLlogo} alt="..." />
          <h2>HTML5</h2>
        </div>
        <div>
          <img src={CSSlogo} alt="..." />
          <h2>CSS3</h2>
        </div>
        <div>
          <img src={Bootstraplogo} alt="..." />
          <h2>Bootstrap</h2>
        </div>
        <div>
          <img src={Reactjslogo} alt="..." />
          <h2>ReactJs</h2>
        </div>
        <div>
          <img src={JSlogo} alt="..." />
          <h2>Java Script</h2>
        </div>
        <div>
          <img src={Nodejslogo} alt="..." />
          <h2>NodeJs</h2>
        </div>
        <div>
          <img src={MySQLlogo} alt="..." />
          <h2>My SQL</h2>
        </div>
        <div>
          <img src={MongoDBlogo} alt="..." />
          <h2>MongoDB</h2>
        </div>
        <div>
          <img src={Githublogo} alt="..." />
          <h2>Github</h2>
        </div>
        <div>
          <img src={VSCodelogo} alt="..." />
          <h2>VS Code</h2>
        </div>
      </div>
    </div>
    </>
}

export default Skills