import React from 'react'
import './navbar.css'

const Navbar = ({ showMenu, setShowMenu }) => {
  return (
    <nav className={'navbar ' + (showMenu && 'active')}>
      <div className='wrapper'>
        <div className='left'>
          <ul>
            <li>
              <a href='#intro'>Home</a>
            </li>
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
        </div>
        <div className='right'>
          <div className='hamburger' onClick={() => setShowMenu(!showMenu)}>
            <span className='line1'></span>
            <span className='line2'></span>
            <span className='line3'></span>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
