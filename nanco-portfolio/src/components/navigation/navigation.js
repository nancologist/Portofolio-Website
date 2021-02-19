import React, { useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import { 
    WbIncandescentOutlined, PersonOutlineOutlined, WorkOutlineOutlined,
    CallOutlined, HomeOutlined
} from '@material-ui/icons/';

import Logo from "../logo/logo";
import './navigation.css';
import NavItem from "./navItem/navItem";
import { routesByLangs } from './data';
import { getWidth } from './util';

const Navigation = (props) => {
    const [drawerOpen, setDrawerOpen] = useState(false)
    const handleLogoClick = () => {
        const isNavDrawer = getWidth() <= 1024
        if (!isNavDrawer) return;
        setDrawerOpen(true);
    };
    const closeDrawer = () => {
        setDrawerOpen(false);
    };
    const handleNavItemClick = () => {
        if (drawerOpen) setDrawerOpen(false);
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

    const mobileNavIcons = [
        <HomeOutlined/>, <PersonOutlineOutlined />, <WbIncandescentOutlined />,
        <WorkOutlineOutlined />, <CallOutlined />
    ]

    const mobileNavItemEls = navItems.map((navItem, index) => (
        <NavItem key={index} goto={navItem.route} clicked={handleNavItemClick}>
            {mobileNavIcons[index]} <span>{navItem.name}</span>
        </NavItem>
    ));

    return (
        <header>
            <nav className="nav" style={xStyle}>
                <div className="nav-logo-container" onClick={handleLogoClick} >
                    <Logo />
                </div>
                <Drawer 
                    anchor="left" open={drawerOpen}
                    onClose={closeDrawer}
                    transitionDuration={400}
                >
                    <h3>Morteza Jalilifar</h3>
                    <ul>{mobileNavItemEls}</ul>
                </Drawer>
                <ul className="nav-list">
                    {navItemEls}
                </ul>
            </nav>
        </header>
    );
};

export default Navigation;