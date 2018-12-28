import React, { Component } from 'react'
import Notifications from './Notifications'
import ProjectList from '../project/ProjectList'
import { connect } from 'react-redux'
import {firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class Dashboard extends Component {
    render() {

        // Grab projects attribute off props
        const { projects } = this.props;

        return(
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList projects={projects}/>
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    // console.log(state);
    return {
        projects: state.firestore.ordered.projects
    }
}

export default compose(
    connect(mapStateToProps),

    // Whenver this component is loaded or data in the firebase projects collection
    // changes, this reducer fires and updates the display (syncs).
    firestoreConnect([
        { collection: 'projects' }
    ])
)(Dashboard);