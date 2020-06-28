import React, { Fragment } from "react"
import {Link} from "gatsby";

import './home.css';

const Home = () => (
    <Fragment>
        <div className="home">
            <div className="home-content">
                <h1>Morteza Jalilifar</h1>
                <p>
                    Hi, I'm Mori! Welcome to my page.
                </p>
                <p>
                    This is a brief introduction of mine, my projects and skills, fasten your seatbelt!
                </p>
                <Link
                    to='/about'
                    activeClassName="active"
                >
                    About Me
                </Link>
            </div>
            <div className="home-bg">
        </div>
        </div>
    </Fragment>
);

export default Home
