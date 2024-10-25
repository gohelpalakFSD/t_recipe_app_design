import React, { useState } from 'react'
import './Maininfo.css'
import Card from './Card'

function Maininfo() {

  return (
    <>
    {/* <div className='overlay'> */}
    <div className='info-sec overlay'>
        <div className='info-data'>
          <div className='recipe-info'>
            <h1 style={{fontSize:"40px", marginBottom:"15px"}}>Food Recipe Plaze</h1>
            <div>
              <input type="text" placeholder='mango'  style={{marginRight:"10px"}}/>
              <button style={{marginRight:"10px", backgroundColor:"rgb(90, 209, 170)", border:"transparent", borderRadius:"5px", padding:"4px 10px", color:"white"}}>Search</button>
              <input type="text" placeholder='Cheen tapak damdam' />
            </div>
          </div>
        </div>
        <Card/>
      </div>
    {/* </div> */}
      
    </>
  )
}

export default Maininfo