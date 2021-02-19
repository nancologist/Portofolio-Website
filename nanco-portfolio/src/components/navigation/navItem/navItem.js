import React from "react";
import { Link } from 'gatsby';
import './navItem.css';

export default (props) => {
    return (
        <li className="navItem" onClick={props.clicked}>
            <Link
                to={props.goto}
                activeClassName="active"
            >
                {props.children}
            </Link>
        </li>
    );
};
