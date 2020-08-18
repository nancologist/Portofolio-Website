import React, {Fragment, useRef} from "react"
import {Link} from "gatsby";

import './home.css';

const Home = () => {
    const homeBg = useRef(null);
    const lightUpBackground = () => {
        /*
        * Lighting Up Background as hover-effect does not
        * perform well on some browsers in some operating
        * systems. So I disable this hover-effect for them.
        *
        * Black List:
        *   - Firefox on MacOS
        *   - ADD MORE...
        * */
        const {userAgent, platform}= navigator;
        if (platform === 'MacIntel') {
            if (userAgent.includes('Firefox')) {
                return;
            }
        }
        homeBg.current.classList.add('light-up')
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
                        onMouseOver={lightUpBackground}
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
