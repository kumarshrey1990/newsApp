import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavLinks.css';

const NavLinks = props => {
    return <ul className="nav-links">
        <li>
            <NavLink to='/' exact>
                news
            </NavLink>
        </li>
        <li>
            <NavLink to='/Comments'>
                comment
            </NavLink>
        </li>
    </ul>
}

export default NavLinks