import React from 'react'

const Card = () => {
  return (
    <div className='cards-container'>
    <div className='section-card'>
        <h1>Hair Cut</h1>
        <button>Book now <span> Rs. 300</span></button>
    </div>
    <div className='section-card'>
        <h1>Facial</h1>
        <button>Book now <span> Rs. 500</span></button>
    </div>
    <div className='section-card'>
        <h1>Hair spa</h1>
        <button>Book Now <span> Rs. 700</span></button>
    </div>
    </div>
  )
}

export default Card
