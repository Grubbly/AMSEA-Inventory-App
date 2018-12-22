import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedInLinks = () => {
    return(
        <ul className="right">
            <li> <NavLink to='/signin'> New Inventory Item </NavLink> </li>
            <li> <NavLink to='/signin'> Log Out </NavLink> </li>
            <li> <NavLink to='/signin' className='btn btn-floating pink lighten-1'> Grub </NavLink> </li>
        </ul>
    )
}

export default SignedInLinks;