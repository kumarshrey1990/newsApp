import React from 'react';
import { Link } from 'react-router-dom';
import NavLinks from './NavLinks';
import './Header.css';


const Header = () => {
    return <header className="header-bar">
                <div><img src={require('../../images/y18.gif')}/></div>
                <div>
                    <h3 className="header-title">
                        <Link to="/"> Hacker News </Link>
                    </h3>
                </div>
                <div>
                    <nav className="header-nav">
                        <NavLinks/>
                    </nav>
                </div>
                <div className="logout">
                    <Link to="/login">login</Link>
                </div>
           </header>
}

export default Header