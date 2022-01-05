import React from 'react'
import './projectList.css'
import Project from '../project/Project'
import { projects } from '../../data'

// const { id, img, link, code, title, description } = projects

const ProjectList = () => {
  return (
    <div className='projectList' id='projects'>
      <div className='projectList-texts'>
        <h1 className='projectList-title'>My Projects</h1>
        <p className='projectList-desc'>
          From Web Components and full CRUD applications with React.JS, Node.JS,
          Javascript, HTML, CSS. Check out my latest web software development
          portfolio projects.
        </p>
      </div>
      <div className='projectList-list'>
        {projects.map((project) => (
          <Project
            key={project.id}
            img={project.img}
            link={project.link}
            title={project.title}
          />
        ))}
      </div>
    </div>
  )
}

export default ProjectList
