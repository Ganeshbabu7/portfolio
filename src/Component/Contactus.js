import React from 'react'
import Heading from './Heading'
import emailImg from '../Asset/email.png'
import gitHubImg from '../Asset/contactGithub.png'
import linkedImg from '../Asset/linkedIn.png'

function Contactus() {
  let title = [{name : "Your'e Welcome..."}, {name : "To Communicate With Web"}, {name : "All Creative Work, Selected Projects"}, {name:"Lets Be Friends"}]
  return <>
    <Heading data={title[3]}/>
    <div className='pageContact'>
      <div className="contact">
        <label className="lable">What's your name</label>
        <input className="input"></input>
        <label className="lable">Your fancy email</label>
        <input className="input"></input>
        <label className="lable">Whats up?</label>
        <textarea className="textarea" rows="7" cols="2"/>
        <div >
          <button className="beFriends">Be Friends</button>
        </div>
      </div>

      <div className="thanks">
        <div className="socialmedia">
        <div className="block">
          <h3>Email</h3>
          <p>eganeshbabu7@gmail.com</p>
          <img src={emailImg} alt="..." />
        </div>
        <div className="block">
          <h3>GitHub</h3>
          <p>Ganeshbabu7</p>
          <img src={gitHubImg} alt="..." />
        </div>
        <div className="block">
          <h3>Linked In</h3>
          <p>Ganesh Babu</p>
          <img src={linkedImg} alt="..." />
        </div>
        </div>
          <h1>Thank you for spending your precious time.<br></br> TC & Bybye...</h1>
        <div>

        </div>
      </div>
    </div>

    </>
}

export default Contactus
