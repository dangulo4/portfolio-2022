import React, { useState, useContext, useRef } from 'react'
import emailjs from '@emailjs/browser'
import Phone from '../../img/phone.png'
import Email from '../../img/email.png'
import Address from '../../img/address.png'
import { ThemeContext } from '../../context'
import './contact.css'

const Contact = () => {
  const formRef = useRef()
  const [done, setDone] = useState(false)
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode

  const handleSubmit = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(
        `${process.env.REACT_APP_EMAILJS_SERVICE}`,
        `${process.env.REACT_APP_EMAILJS_TEMPLATE}`,
        formRef.current,
        `${process.env.REACT_APP_EMAILJS_USER}`
      )
      .then(
        (result) => {
          console.log(result.text)
          setDone(true)
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  return (
    <div className='contact'>
      <div className='contact-bg'></div>
      <div className='contact-wrapper'>
        <div className='contact-left'>
          <h1 className='contact-title'>Let's connect</h1>
          <div className='contact-info'>
            <div className='contact-info-item'>
              <img src={Phone} alt='' className='contact-icon' />
              +1(714)422-4998
            </div>
            <div className='contact-info-item'>
              <img src={Email} alt='' className='contact-icon' />{' '}
              dangulo4@gmail.com
            </div>
            <div className='contact-info-item'>
              <img src={Address} alt='' className='contact-icon' /> 1321
              Shanessey Rd, El Cajon, CA 92019
            </div>
          </div>
        </div>
        <div className='contact-right'>
          <p className='contact-description'>
            <b>What's your story?</b> Get in touch. Always available for
            freelancing if the right project comes along.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{ backgroundColor: darkMode && '#333' }}
              type='text'
              placeholder='Name'
              name='user_name'
            />
            <input
              style={{ backgroundColor: darkMode && '#333' }}
              type='text'
              placeholder='Subject'
              name='user_subject'
            />
            <input
              style={{ backgroundColor: darkMode && '#333' }}
              type='text'
              placeholder='Email'
              name='user_email'
            />
            <textarea
              style={{ backgroundColor: darkMode && '#333' }}
              rows='5'
              placeholder='Message'
              name='message'
            />
            <button>Submit</button>
            <div style={{ paddingTop: '10px' }}>
              {done &&
                ' Thank you for you message, I look forward to conenecting with you!'}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
