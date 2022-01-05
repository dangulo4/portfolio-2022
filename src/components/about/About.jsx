import React from 'react'
import Showcase from '../../img/showcase.jpg'
import LinkedIn from '../../img/linkedIn.png'
import Resume from '../../img/DanielAngulo.pdf'

import './about.css'

function about() {
  return (
    <main className='about' id='about'>
      <section className='about-left'>
        <div className='about-card bg'></div>
        <div className='about-card'>
          <a
            href='https://www.linkedin.com/in/daniel-angulo-0b7a3781/'
            target='_blank'
            rel='noreferrer'
          >
            <img src={LinkedIn} alt='showcase' className='about-image' />
          </a>
        </div>
      </section>
      <section className='about-right'>
        <h1 className='about-title'>About Me</h1>
        <p className='about-sub'>
          Fullstack developer from sunny San Diego, CA. I truly believe that
          what makes us different makes us stronger. If I had to describe
          myself, I am a person with a versatile skill-set, a lot of integrity,
          and a willingness to bring value.
        </p>
        <p className='about-desc'>
          It has been my passion to become an expert in coding. I have a diverse
          set of programming skills in full stack web application development. I
          strive for clean content and simple structure with thoughtful design.
        </p>
        <div className='about-award'>
          <img src={Showcase} alt='' className='about-award-image' />
          <div className='about-award-texts'>
            <h4 className='about-award-title'>My Resume</h4>
            <p className='about-award-desc'>
              Click {}
              <a href={Resume} target='_blank' rel='noreferrer'>
                here
              </a>
              {} to view my Resume
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default about
