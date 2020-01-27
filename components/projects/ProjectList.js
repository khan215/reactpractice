import React from 'react'
import ProjectSummary from './ProjectSummary'

 const ProjectList = ({projects}) => {
    return (
        <div className='project-list section'>
            {projects && projects.map(projects =>{
                return (
                    <ProjectSummary project={projects} key={projects.id}/>                
                )
            })}
        </div>
    )
}
export default ProjectList
