import React from 'react'
import classes from './ProjectsItem.module.css'

type ProjectsItemProps = {
    id: number
    image: string
    year: number
    title: string
}

const ProjectsItem = ({id, image, year, title}:ProjectsItemProps) => {
  return (
    <div className={classes.projects_item}>
        <div><img src={image} alt="project" /></div>
        <div className={classes.projects_item_content}>
            <h4 className={classes.projects_item_year}>{year}</h4>
            <h3 className={classes.projects_item_title}>{title}</h3>
        </div>
        <div className={classes.projects_item_discover}>
            <a href="">Dicover</a>
        </div>
    </div>
  )
}

export default ProjectsItem