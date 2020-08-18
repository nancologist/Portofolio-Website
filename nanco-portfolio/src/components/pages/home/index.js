import React, {Fragment, useRef} from "react"
import LanguageIcon from '@material-ui/icons/Language';
import {Link} from "gatsby";

import './home.css';

const Home = (props) => {
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
                        {props.greeting1}
                    </p>
                    <p>
                        {props.greeting2}
                    </p>
                    <Link
                        to={props.aboutMeRoute}
                        onMouseOver={lightUpBackground}
                        onMouseOut={() => {homeBg.current.classList.remove('light-up')}}
                    >
                        {props.aboutMeText}
                    </Link>
                </div>
                <div ref={homeBg} className="home-bg">
                </div>
                <div className="home__select-lang">
                    <LanguageIcon className="home__select-lang__icon" fontSize='large' />
                    <div className="home__select-lang__list">
                        <span>DE</span>
                        <span>EN</span>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Home
