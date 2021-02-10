import React from 'react';
// import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
// import {NavLink} from 'react-router-dom';

import Logo from "../logo/logo";
import './navigation.css';
import NavItem from "./navItem/navItem";
import { routesByLangs } from './data';

const Navigation = (props) => {
    let xStyle;
    let navItems;
    if (props.isHome) {
        xStyle = {
            opacity: 0
        }
    }

    if (props.isGerman) {
        navItems = routesByLangs.de;
    } else {
        navItems = routesByLangs.en;
    }

    const navItemEls = navItems.map((navItem, index) => (
        <NavItem key={index} goto={navItem.route}>{navItem.name}</NavItem>
    ));

    return (
        <header>
            <nav className="nav" style={xStyle}>
                <div className="nav-logo-container">
                    <Logo/>
                </div>
                <ul className="nav-list">
                    {navItemEls}
                </ul>
            </nav>
        </header>
    );
};

export default Navigation;