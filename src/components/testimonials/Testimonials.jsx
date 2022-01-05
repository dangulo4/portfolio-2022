import React, { useContext } from 'react'
import Testimonial1 from '../../img/testimonial-ac.jpg'
import Testimonial2 from '../../img/testimonial-mb.jpg'
import Testimonial3 from '../../img/testimonial-mt.jpg'
import { ThemeContext } from '../../context'
import './testimonials.css'

const Testimonials = () => {
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode

  const data = [
    {
      id: 1,
      name: 'Alexia Chalita',
      title: 'Marketing at Trovata.io',
      img: Testimonial1,
      icon: '',
      desc: 'I worked with Daniel on several full stack projects that used REACT, node.js, RESTful API architect, JS, mongoDB, just to name a few. Daniel demonstrated a wide-range of skills, both in the backend and front-end. Additionally, he was the API guru of the group. Ultimately, he was a pleasure to work with -- always a team player and eager to learn more. Highly recommended!',
    },
    {
      id: 2,
      name: 'Matthew Bell',
      title: 'Web Developer, Game Dev, Quality Control',
      img: Testimonial2,
      icon: '',
      desc: 'I worked in a group with Daniel a couple times, and each time he was a hard worker who was dedicated to understanding and finding solutions to any hurdles our groups came across. His level of understanding when it comes to back-end technologies is very strong.',
    },
    {
      id: 3,
      name: 'Mark Twichel',
      title: 'JD, BSN, RN, NE-BC',
      img: Testimonial3,
      icon: '',
      desc: '"Daniel is an excellent team member. Extraordinarily dedicated, responsive, and conscientious. Anyone would be lucky to have him as part of their group."',
    },
  ]
  return (
    <div
      className='testimonials'
      id='testimonials'
      style={{ color: darkMode && '#e9976a' }}
    >
      <h1>Testimonials</h1>
      <div className='container'>
        {data.map((d) => (
          <div
            className='card'
            key={d.id}
            style={{ backgroundColor: darkMode && '#333' }}
          >
            <div className='top'>
              <img className='user' src={d.img} alt='' />
            </div>
            <div
              className='center'
              style={{ backgroundColor: darkMode && '#333' }}
            >
              {d.desc}
            </div>
            <div className='bottom'>
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonials
