import React from 'react'

function Listing({imgSrc, title, price}) {
  // Add location as param^^
  return (
    <div>
      <img src={imgSrc} alt='blank'/>
      <h3>{title}</h3>
      <p>${price}</p>
    </div>
  )
}

export default Listing;