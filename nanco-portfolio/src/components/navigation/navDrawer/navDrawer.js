import React, { useState, forwardRef, useImperativeHandle } from 'react';

import Drawer from '@material-ui/core/Drawer';
import { 
    WbIncandescentOutlined, PersonOutlineOutlined, WorkOutlineOutlined,
    CallOutlined, HomeOutlined
} from '@material-ui/icons/';

import NavItem from '../navItem/navItem';

const NavDrawer = ({ navItems }, ref) => {
    const [drawerOpen, setDrawerOpen] = useState(false)

    useImperativeHandle(ref, () => ({
        openDrawer: () => { setDrawerOpen(true) }
    }));

    const closeDrawer = () => {
        setDrawerOpen(false);
    };

    const handleNavItemClick = () => {
        if (drawerOpen) setDrawerOpen(false);
    };

    const mobileNavItemEls = navItems.map((navItem, index) => (
        <NavItem key={index} goto={navItem.route} clicked={handleNavItemClick}>
            {mobileNavIcons[index]} <span>{navItem.name}</span>
        </NavItem>
    ));


    return (
        <Drawer 
        anchor="left" open={drawerOpen}
        onClose={closeDrawer}
        transitionDuration={400}
        >
            <h3>Morteza Jalilifar</h3>
            <ul>{mobileNavItemEls}</ul>
        </Drawer>
    );
};

const mobileNavIcons = [
    <HomeOutlined/>, <PersonOutlineOutlined />, <WbIncandescentOutlined />,
    <WorkOutlineOutlined />, <CallOutlined />
]

export default forwardRef(NavDrawer);