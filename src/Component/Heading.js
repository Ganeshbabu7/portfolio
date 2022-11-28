import React from 'react'

function Heading({data}) {
  return (
    <div className="heading">
      <h2>{data.name}</h2>
    </div>
  )
}

export default Heading
