import React, {Fragment, useRef} from "react"
import {Link} from "gatsby";

import './home.css';

const Home = () => {
    const homeBg = useRef(null);
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
                        onMouseOver={() => {homeBg.current.classList.add('light-up')}}
                        onMouseOut={() => {homeBg.current.classList.remove('light-up')}}
                    >
                        About Me
                    </Link>
                </div>
                <div ref={homeBg} className="home-bg">
                </div>
            </div>
        </Fragment>
    );
};

export default Home
