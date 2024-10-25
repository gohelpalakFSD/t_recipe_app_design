// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import Header from "./pages/Header/Header"
import Maininfo from "./pages/mainsection/Maininfo"
import Sidebar from "./pages/sidebar/Sidebar"

function App() {


  return (
    <>
    <Header/>
     <div style={{display:"flex"}} className='sec'>
      <Sidebar/>
      <Maininfo/>
     </div>
    </>
  )
}

export default App
