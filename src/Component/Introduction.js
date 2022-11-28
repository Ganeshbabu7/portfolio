import React from 'react'
import Heading from './Heading'

function Introduction() {
let title = [{name : "Your'e Welcome..."}, {name : "To Communicate With Device"}, {name : "All Creative Work Selected Projects"}, {name:"Lets Be Friends"}, {name:"Introduction"}]  
  return <>
  <Heading data={title[4]}/>
  <div className="introduction">
    <p className="slogan">I'm professional web developer, my expertise is to create website designing and developing</p>
    <div className="introBox">
    <div className="box"><div className="innerBox">Familier to work with Front end as well as Back end</div></div>
    <div className="box"><div className="innerBox">Familier to work with RWD, DOM & Rest API's</div></div>
    <div className="box"><div className="innerBox">Problem-Solving, Teamwork, Quick learner, Self-motivated</div></div>
    <div className="box"><div className="innerBox">Able to create website with efficient and organized coding</div></div>
    <div className="box"><div className="innerBox">Able to grasp customers requirement and meet the fullest</div></div>
    </div>
  </div>
  </>
}

export default Introduction