import React, { useState } from 'react'
import './Header.css'

function Header() {
    let [ham, setham] = useState(false)
    return (
        <>
            <header >
                <div className='nav-container'>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: 'space-between' }}>
                        <ul className='nav-items'>
                            <li className='nav-list'>
                                <a href='#'>Home</a>
                            </li>
                            <li className='nav-list'>
                                <a href='#'>About</a>
                            </li>
                            <li className='nav-list'>
                                <a href='#'>Contact us</a>
                            </li>
                            <li className='nav-list'>
                                <a href='#'>Blog</a>
                            </li>
                        </ul>
                        <div className='hidebar'>
                            <button onClick={()=>{setham(ham==false)}}>&#9776;</button>
                        </div>
                        <div style={{ padding: "0px 20px" }}>
                            <button style={{ padding: "7px 17px", borderRadius: '5px' }} >Login</button>
                        </div>
                    </div>
                </div>
            </header>
            <div className= 'sidebar-hide'>
                <ul className= {`nav-items-hide ${ham==true?"active" :""}`}>
                    <li className='nav-list-hide'>
                        <a href='#'>Home</a>
                    </li>
                    <li className='nav-list-hide'>
                        <a href='#'>About</a>
                    </li>
                    <li className='nav-list-hide'>
                        <a href='#'>Contact us</a>
                    </li>
                    <li className='nav-list-hide'>
                        <a href='#'>Blog</a>
                    </li>
                </ul>
            </div>

        </>
    )
}

export default Header