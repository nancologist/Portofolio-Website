import React from 'react';
// import {NavLink} from 'react-router-dom';

import Logo from "../logo/logo";
import styles from './navigation.module.css';

const AppNav = (props) => {
    // let navCss = [styles.navBar];
    //
    // if (props.isHome) {
    //     navCss.push(styles.homeNavBar);
    // }

    return (
        <header>
            <nav className={styles.navBar}>
                <div className={styles.logoContainer}>
                    <Logo/>
                </div>
                <ul className={styles.navList}>
                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                    <li><a>Contact</a></li>

                    {/*<li>*/}
                        {/*<NavLink*/}
                        {/*    activeClassName={styles.active}*/}
                        {/*    exact*/}
                        {/*    to="/">Home</NavLink>*/}
                    {/*</li>*/}
                    {/*<li>*/}
                        {/*<NavLink*/}
                        {/*    activeClassName={styles.active}*/}
                        {/*    exact*/}
                        {/*    to="/courses">Kurse</NavLink>*/}
                    {/*</li>*/}
                </ul>
            </nav>
        </header>
    );
};

export default AppNav;