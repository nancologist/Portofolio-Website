import React from 'react';
// import {NavLink} from 'react-router-dom';
import styles from './navigation.module.css';

const AppNav = (props) => {
    let navCss = [styles.navBar];

    if (props.isHome) {
        navCss.push(styles.homeNavBar);
    }

    return (
        <header>
            <nav className={navCss.join(' ')}>
                <div className={styles.logoContainer}>
                    {/*<img src={logo} alt="VHS Kurse - Logo"/>*/}
                </div>
                <ul className={styles.navList}>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>

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