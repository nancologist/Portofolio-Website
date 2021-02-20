import React, { useEffect, useRef, useState } from 'react';

import Logo from "../logo/logo";
import './navigation.css';
import NavItem from "./navItem/navItem";
import { routesByLangs } from './data';
import { getWidth } from './util';
import NavDrawer from './navDrawer/navDrawer';

const Navigation = (props) => {
    const navDrawerCmp = useRef();
    const navEl = useRef();
    const [navClasses, setNavClasses] = useState(['nav']);

    useEffect(() => {
        window.onscroll = () => {
            const sticky = navEl.current.offsetTop;
            console.log(sticky + ' , ' + window.pageYOffset)
            if (window.pageYOffset > sticky) {
                setNavClasses(['nav', 'nav--sticky']);
              } else {
                setNavClasses(['nav']);
              }
        }
    }, []);

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
            <nav className={navClasses.join(' ')} style={xStyle} ref={navEl} >
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