import React from 'react'
import Header from './Components/Header'
import Card from './Components/Card'

const App = () => {
  return (
    <div>
      <Header/>
      <div>
        <h2>Services</h2>
        <div className='service-container'>
          <Card/>
        </div>
      </div>
    </div>
  )
}

export default App
