import React, { useRef } from 'react';

import Logo from "../logo/logo";
import './navigation.css';
import NavItem from "./navItem/navItem";
import { routesByLangs } from './data';
import { getWidth } from './util';
import NavDrawer from './navDrawer/navDrawer';

const Navigation = (props) => {
    const navDrawerCmp = useRef();

    const handleLogoClick = () => {
        const isNavDrawer = getWidth() <= 1024
        if (!isNavDrawer) return;
        navDrawerCmp.current.openDrawer();
    };
    

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
        <NavItem key={index} goto={navItem.route}>
            {navItem.name}
        </NavItem>
    ));

    return (
        <header>
            <nav className="nav" style={xStyle}>
                <div className="nav-logo-container" onClick={handleLogoClick} >
                    <Logo />
                </div>
                <NavDrawer navItems={navItems} ref={navDrawerCmp} />
                <ul className="nav-list">
                    {navItemEls}
                </ul>
            </nav>
        </header>
    );
};

export default Navigation;