import React from "react";
import './navItem.css';

const NavItem = (props) => {
    return (
        <li className="navItem"><a>{props.children}</a></li>
    );
};

export default NavItem;