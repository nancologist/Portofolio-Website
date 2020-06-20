import React from 'react';
// import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
// import {NavLink} from 'react-router-dom';

import Logo from "../logo/logo";
import styles from './navigation.module.css';
import NavItem from "./navItem/navItem";

const AppNav = (props) => {
    return (
        <header>
            <nav className={styles.navBar}>
                <div className={styles.logoContainer}>
                    <Logo/>
                </div>
                <ul className={styles.navList}>
                    <NavItem>Home</NavItem>
                    <NavItem>About</NavItem>
                    <NavItem>Contact</NavItem>

                    {/*<li>*/}
                        {/*<NavLink*/}
                        {/*    activeClassName={styles.active}*/}
                        {/*    exact*/}
                        {/*    to="/">Home</NavLink>*/}
                    {/*</li>*/}
                </ul>
            </nav>
        </header>
    );
};

export default AppNav;