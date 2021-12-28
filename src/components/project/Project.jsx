import React from 'react'
import './project.css'

const Project = ({ link, img, title }) => {
  return (
    <div className='project'>
      <h5
        style={{
          backgroundColor: 'transparent',
          textAlign: 'center',
          position: 'sticky',
          zIndex: 2,
        }}
      >
        {title}
      </h5>
      <div className='project-browser'>
        <div className='project-circle'></div>
        <div className='project-circle'></div>
        <div className='project-circle'></div>
      </div>
      <a href={link} target='_blank' rel='noreferrer'>
        <img src={img} alt='' className='project-img' />
      </a>
    </div>
  )
}

export default Project
