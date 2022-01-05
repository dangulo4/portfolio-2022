import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <nav className='primary-nav primary-nav--pull-right'>
      <ul>
        <li>
          <a href='#about'>About Me</a>
        </li>
        <li>
          <a href='#projects'>Projects</a>
        </li>
        <li>
          <a href='#testimonials'>Testimonials</a>
        </li>
        <li>
          <a href='#contact'>Contact Me</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
