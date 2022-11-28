import React from 'react'
import {Link,Outlet} from 'react-router-dom'
import {useState} from 'react'
// import photoImg from '../Asset/E.G.B PHOTO1.jpg'

function Name() {
  let [toggle, setToggle] = useState(true);
  return <div className="name">
      <h2>Hello Everybody I'm</h2>
      <h1>Ganesh Babu E</h1>
      <h2>MERN Stack Devloper</h2>
      <div className="button">
        {toggle?
          (<Link to="./about"><button id="btn" onClick={()=>{setToggle(!toggle)}}>Discover Me</button></Link>) :
          (<Link to="./"><button id="btn" onClick={()=>{setToggle(!toggle)}}>Home</button></Link>) }
        <Outlet/>
      </div>
      {/* <div className='photo'>
        <img src={photoImg} alt="..." />
      </div> */}
    </div>
}

export default Name
