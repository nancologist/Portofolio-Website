import React from 'react';
// import MenuIcon from '@material-ui/icons/Menu';

import Logo from "../logo/logo";
import './navigation.css';
import NavItem from "./navItem/navItem";
// import AppDrawer from '../AppDrawer/AppDrawer';
import { routesByLangs } from './data';

const Navigation = (props) => {
    let xStyle;
    let navItems;
    // let drawerIcon;
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

    // Todo: NavBar for small devices.
    // const mediaQuery = window.matchMedia('(max-width: 1200px)');
    // if (mediaQuery.matches) {
    //     drawerIcon = <MenuIcon />;
    // }

    return (
        <header>
            <nav className="nav" style={xStyle}>
                <div className="nav-logo-container">
                    {/* {drawerIcon} */}
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