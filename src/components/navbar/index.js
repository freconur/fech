import React from 'react'
import './navbar.css'
const Navbar = () => {
  return (
    <div className='Navbar'>
        <img src="https://firebasestorage.googleapis.com/v0/b/ecommerce-eacb4.appspot.com/o/ecommerce%2Flogo-wz.png?alt=media&token=d0543953-17db-43e3-a22a-947d560e980b" alt="" />
            <ul className='navbar_section'>
                <li>work</li>
                <li>resume</li>
                <li>contact</li>
            </ul>
            <ul className='navbar_dev_social'>
                <li>github</li>
                <li>linkedin</li>
            </ul>
    </div>
  )
}

export {Navbar}