import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signUp } from '../../store/actions/authActions'

class SignUp extends Component {
  
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
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
        // Don't refresh the page
        e.preventDefault();
        this.props.signUp(this.state)
    }

    render() {

        const { auth, authError } = this.props;
        if (auth.uid) return <Redirect to='/' />

    return (
      <div className='container'>
        <form onSubmit={this.handleSubmit} className="white">
            <h5 className="grey-text text-darken-3">Sign Up</h5>
            <div className="input-field">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" onChange={this.handleChange}/>
            </div>
            <div className="input-field">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" onChange={this.handleChange}/>
            </div>
            <div className="input-field">
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" onChange={this.handleChange}/>
            </div>
            <div className="input-field">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" onChange={this.handleChange}/>
            </div>
            <div className="input-field">
                <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
                <div className="red-text center">
                    {authError ? <p> { authError } </p> : null}
                </div>
            </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
