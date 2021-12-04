import React from 'react'
import Showcase from '../../img/showcase.jpg'

import './about.css'

function about() {
  return (
    <main className='about'>
      <section className='about-left'>
        <div className='about-card bg'></div>
        <div className='about-card'>
          <img src={Showcase} alt='showcase' className='about-image' />
        </div>
      </section>
      <section className='about-right'>
        <h1 className='about-title'>About Me</h1>
        <p className='about-sub'>
          Native from San Diego, I would describe myself as a person with a
          versatile skill-set, a lot of integrity, and a willingness to go
          beyond the extra mile to satisfy the customer.
        </p>
        <p className='about-desc'>
          Over the past 10 years I have worked within healthcare. Being
          analytical driven and engaged on multiple projects has given me the
          expirence to be successful in an agile environment. I strive to
          complete projects on time, within budget, and most importantly to the
          satisfaction of stake-holders.
        </p>
        <div className='about-award'>
          <img src='' alt='' className='about-award-image' />
          <div className='about-award-texts'>
            <h4 className='about-award-title'>International Design</h4>
            <p className='about-award-desc'>
              Lorem ipsumcum eligendi error voluptatem temporibus quos magni ad
              rem?
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default about
