import React from 'react'
import Heading from './Heading'

function About() {
  let title = [{name : "Your'e Welcome..."}, {name : "To Communicate With Device"}, {name : "All Creative Work Selected Projects"}, {name:"Lets Be Friends"}]
  return <div>
      <Heading data={title[0]}/>
      <div  className="about">
        <div className="split">
          <div className="splitLeft">
            <h3>Why You Hire Me</h3>
            <h4 className="content">
              I love to work with in User Experience & User Interface designing.  Because I love to solve the design problem and find easy and better solutions to solve it.  I always try my best to make good user interface with the best user experience.  Aims to work with small business and marginalized communities to bring their passions to life.  I am designer of style and hype for your success.<br></br><br></br>
              You may have noticed from my portfolio, but I'm obsessed with unique, interesting design and user-friendly functionality so hit me up with your weird artistic project ideas or app proposals.<br></br><br></br>
              Set the trends, push the limits.  Take my talent and experience.  Lets make design sound.  if you're looking for a developer to add to your team, I'd love to hear from you!
            </h4>
          </div>
          <div className="splitRight">
            <h3>My Strength</h3>
            <h4 className="content">
              <ul>
                <li>Familier to work with Front end as well as Back end</li>
                <li>Familier to work with RWD, DOM & Rest API's</li>
                <li>Able to create website with efficient and organized coding</li>
                <li>Able to grasp customers requirement and meet the fullest</li>
                <li>Problem-Solving, Collaboration, Teamwork</li>
                <li>Quick learner, Self-motivated, Disciplined </li>
              </ul>
            </h4>
          </div>
        </div>
      </div>
    </div>
}

export default About
