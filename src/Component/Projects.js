import React from 'react'
import Heading from './Heading'
import Card from './Card'

function Projects() {
  let title = [{name : "Your'e Welcome..."}, {name : "To Communicate With Device"}, {name : "All Creative Work, Selected Projects"}, {name:"Lets Be Friends"}]
  return <>
  <Heading data={title[2]}/>
    <div className="projects">
      <div className='project'>
        <Card />
      </div>
    </div>
  </>
}

export default Projects
