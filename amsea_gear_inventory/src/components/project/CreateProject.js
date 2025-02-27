import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProject } from '../../store/actions/projectActions'
import { Redirect } from 'react-router-dom'

class CreateProject extends Component {
  
    state = {
        title: '',
        content: '',
    }
  
    // When user changes an input field:
    handleChange = (e) => {
        this.setState({
            // [e.target.id] returns the value of the id tag in input tag
            // this means only the state field the user is inputting for
            // is updated rather than the entire state.
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        // Don't reload the page
        e.preventDefault();

        this.props.createProject(this.state)
        this.props.history.push('/');
    }

    render() {
        const { auth } = this.props;

        if (!auth.uid) return <Redirect to='/signin' />

        return (
        <div className='container'>
            <form onSubmit={this.handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">Create New Inventory Item</h5>
                <div className="input-field">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" onChange={this.handleChange}/>
                </div>
                <div className="input-field">
                    <label htmlFor="content">Content</label>
                    <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">Create</button>
                </div>
            </form>
        </div>
        )
  }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
    }
}

// When CreateProject is called, run this function to send a dispatch to update
// projects in store and make async call to database.
const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)
