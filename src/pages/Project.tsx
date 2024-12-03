import React from 'react'
import { useParams } from 'react-router-dom'
import { ProjectsList } from '../components'
import './css/Project.css'

const Project = () => {
    const { id } = useParams<string>()
    let a = id ? id : '0'
    let index = parseInt(a)
    const currentProject = ProjectsList[index]

    return (
        <>
            {
                currentProject.id === 0 ?
                    <main className='project-main' style={{ background: `url("${currentProject.bgimage}") no-repeat` }}>
                        <div className="title project-main-category">{currentProject.category}</div>
                        <h1 className="project-main-title">{currentProject.title}</h1>
                        <p className="project-main-desc">{currentProject.desctiption}</p>
                    </main> 
                : <h1 className='project-main-title project-not-info'>Project information not found</h1>    
            }
        </>
    )
}

export default Project