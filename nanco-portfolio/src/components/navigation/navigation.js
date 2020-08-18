import React from 'react';
// import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
// import {NavLink} from 'react-router-dom';

import Logo from "../logo/logo";
import './navigation.css';
import NavItem from "./navItem/navItem";

const langs = {
    en: [
        {
            name: 'Home',
            route: '/',
        },
        {
            name: 'About',
            route: '/about',
        },
        {
            name: 'Contact',
            route: '/contact',
        }
    ],
    de: [
        {
            name: 'Startseite',
            route: '/de',
        },
        {
            name: 'Über mich',
            route: '/de/ueber-mich',
        },
        {
            name: 'Kontakt',
            route: '/de/kontakt',
        }
    ]
};

const Navigation = (props) => {
    let xStyle;
    let navItems;
    if (props.isHome) {
        xStyle = {
            opacity: 0
        }
    }

    if (props.isGerman) {
        navItems = langs.de;
    } else {
        navItems = langs.en;
    }

    const navItemEls = navItems.map((navItem) => (
        <NavItem goto={navItem.route}>{navItem.name}</NavItem>
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