import React from 'react'
import './projectList.css'
import Project from '../project/Project'
import { projects } from '../../data'

// const { id, img, link, code, title, description } = projects

const ProjectList = () => {
  return (
    <div className='projectList'>
      <div className='projectList-texts'>
        <h1 className='projectList-title'>My Projects</h1>
        <p className='projectList-desc'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga vitae
          iusto optio necessitatibus velit rem! Architecto facere, aut delectus
          consequuntur odit minus corrupti neque animi totam, sint ad iusto
          praesentium!
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
