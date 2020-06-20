import React from "react";
import './navItem.css';

export default (props) => {
    return (
        <li className="navItem"><a>{props.children}</a></li>
    );
};
