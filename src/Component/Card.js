import React from 'react'
import projectImg1 from '../Asset/project1.PNG'
import projectImg2 from '../Asset/project2.PNG'
import projectImg3 from '../Asset/project3.PNG'
import projectImg4 from '../Asset/project4.PNG'

function Card() {
  return <>
      <div>
        <div className="card">
          <div className="image">
            <a  href="https://lucky-mochi-789ea6.netlify.app/" target="blank"><img src={projectImg1} alt="..."/></a>
          </div>
          <h3>Data Showcasing using Table</h3>
          <p>You can see the data of recent birds survey with respect to country and you can filter it as you want</p>
        </div>
      </div>
      <div>
        <div className="card">
          <div className="image">
            <a href="https://nimble-crisp-ca4013.netlify.app/" target="blank"><img src={projectImg2} alt="..."/></a>
          </div>
          <h3>Online Book Sales Project</h3>
          <p>There is No Friend as loyal as Book, so here you can purchase it</p>
        </div>
      </div>
      <div>
        <div className="card">
          <div className="image">
            <a href="https://superlative-concha-c7d0bd.netlify.app/" target="blank"><img src={projectImg3} alt="..."/></a>
          </div>
          <h3>Games Details and Its Link</h3>
          <p>If you feel time to spend with games just come download the game and play it...</p>
        </div>
      </div>
      <div>
        <div className="card">
          <div className="image">
            <a href="https://capable-nougat-76f7e8.netlify.app/" target="blank"><img src={projectImg4} alt="..."/></a>
          </div>
          <h3>Replication of Website with Responsiveness</h3>
          <p>Recreation of website as much as possible and added responsiveness</p>
        </div>
      </div>
  </>
}

export default Card;