import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignInLinks'
import SignedOutLinks from './SignOutLinks'
import { connect } from 'react-redux'

const Navbar = (props) => {
    const { auth } = props;
    const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />;
    return(
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">Inventory</Link>
                { links }
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Navbar);