import React, { Fragment } from "react"
import {Link} from "gatsby";

import './home.css';

const Home = () => {
    const handleMouseOver = () => {
        const homeBgEl = document.querySelector('.home-bg');
        homeBgEl.classList.add('hover');
    };

    const handleMouseOut = () => {
        const homeBgEl = document.querySelector('.home-bg');
        homeBgEl.classList.remove('hover');
    };

    return (
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
                        onMouseOver={handleMouseOver}
                        onMouseOut={handleMouseOut}
                    >
                        About Me
                    </Link>
                </div>
                <div className="home-bg">
                </div>
            </div>
        </Fragment>
    );
};

export default Home
