import React from 'react'
import './Sidebar.css'

function Sidebar() {
  return (
    <>
      <div className='sidebar'>
        <div>
          <div>
            <img src="./Img/star.png" alt="" className='sidebar-img' />
          </div>
        </div>
        <div className='side-info'>
          <h1 >Recipe app with React js</h1>
          <h3>Build and Deploy</h3>
        </div>
        <div style={{padding:"0px 60px",}}>
            <h3 style={{marginTop:"15%", color:"white", fontSize:'25px'}}>... From scratch</h3>
        </div>
      </div>
    </>
  )
}

export default Sidebar