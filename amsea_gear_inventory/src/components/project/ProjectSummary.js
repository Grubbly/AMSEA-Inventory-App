import React from 'react'

const ProjectSummary = ({project}) => {
    return(
        <div className="card z-depth-0 teal lighten-2 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{project.title}</span>
                <p> Posted by {project.authorFirstName + " " + project.authorLastName} </p>
                <p className="grey-text text-darken-3"> 22nd December, 2:20am </p>
            </div>
        </div>
    )
}

export default ProjectSummary;