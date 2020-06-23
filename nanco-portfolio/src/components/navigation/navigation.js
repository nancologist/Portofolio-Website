import React from 'react';
// import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
// import {NavLink} from 'react-router-dom';

import Logo from "../logo/logo";
import './navigation.css';
import NavItem from "./navItem/navItem";

const Navigation = (props) => {
    return (
        <header>
            <nav className="nav">
                <div className="nav-logo-container">
                    <Logo/>
                </div>
                <ul className="nav-list">
                    <NavItem goto={'/'}>Home</NavItem>
                    <NavItem goto={'/about'}>About</NavItem>
                    <NavItem goto={'/contact'}>Contact</NavItem>
                </ul>
            </nav>
        </header>
    );
};

export default Navigation;