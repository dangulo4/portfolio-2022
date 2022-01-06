import React from 'react'
import './menu.css'

const Menu = ({ showMenu, setShowMenu }) => {
  return (
    <div className={'menu ' + (showMenu && 'active')}>
      <ul className='menu-u'>
        <li className='li-u' onClick={() => setShowMenu(false)}>
          <a href='#intro'>Home</a>
        </li>
        <li className='li-u' onClick={() => setShowMenu(false)}>
          <a href='#about'>About Me</a>
        </li>
        <li className='li-u' onClick={() => setShowMenu(false)}>
          <a href='#projects'>Projects</a>
        </li>
        <li className='li-u' onClick={() => setShowMenu(false)}>
          <a href='#testimonials'>Testimonials</a>
        </li>
        <li className='li-u' onClick={() => setShowMenu(false)}>
          <a href='#contact'>Contact Me</a>
        </li>
      </ul>
    </div>
  )
}

export default Menu
