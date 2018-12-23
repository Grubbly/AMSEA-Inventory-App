import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedInLinks = () => {
    return(
        <ul className="right">
            <li> <NavLink to='/create'> New Inventory Item </NavLink> </li>
            <li> <NavLink to='/'> Log Out </NavLink> </li>
            <li> <NavLink to='/' className='btn btn-floating pink lighten-1'> Grub </NavLink> </li>
        </ul>
    )
}

export default SignedInLinks;