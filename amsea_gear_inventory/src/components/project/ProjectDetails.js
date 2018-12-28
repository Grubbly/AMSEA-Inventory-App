import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

const ProjectDetails = (props) => {
  
  const { project } = props;

  if(project) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title"> { project.title } </span>
          <p> { project.content } </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by { project.authorFirstName } { project.authorLastName }</div>
          <div> DATE </div>
        </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="container center">
        <p> Loading data... </p>
      </div>
    )
  }
}

const mapStateToProps = (state, componentProps) => {
  const id = componentProps.match.params.id;
  const projects = state.firestore.data.projects;

  // Grab the project with ID equal to the project clicked on (Hash Map)
  const project = projects ? projects[id] : null
  return {
    project: project
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection: 'projects'}
  ])
)(ProjectDetails)

