import React from 'react'
import './css/Projects.css'
import { ProjectsItem, ProjectsList } from '../components'

const Projects = () => {
  return (
    <div className='container'>
        <h1 className="title page-title">Projects</h1>
        <div className="project-categories d-f">
            <button className='project-categories-btn categories-btn__active'>All categories</button>
            <button className='project-categories-btn'>Retail & Ecommerce</button>
            <button className='project-categories-btn'>Real estate</button>
            <button className="project-categories-btn">Custom CRM</button>
            <button className="project-categories-btn">Education & E-learning</button>
            <button className="project-categories-btn">Food & restaurant</button>
            <button className="project-categories-btn">Healthcare & Fitness</button>
            <button className="project-categories-btn">Logistic & distribution</button>
        </div>
        <div className="projects-box d-f">
            {
                ProjectsList.map((project) => {
                    return (
                        <ProjectsItem
                            key={project.id}
                            id={project.id}
                            image={project.image}
                            year={project.year}
                            title={project.title}
                        />
                    )
                })
            }
        </div>
    </div>
  )
}

export default Projects