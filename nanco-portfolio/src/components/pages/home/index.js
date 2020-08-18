import React, {Fragment, useRef, useState} from "react"
import LanguageIcon from '@material-ui/icons/Language';
import {Link} from "gatsby";

import './home.css';

const Home = (props) => {
    const homeBg = useRef(null);
    const [listClass, setListClass] = useState(['home__select-lang__list']);
    const [iconClass, setIconClass] = useState(['home__select-lang__icon']);
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
    const showLangs = () => {
        const className = 'home__select-lang__list--is-shown';
        const classIndex = listClass.indexOf(className);
        const classExists = classIndex > -1;
        if (classExists) {
            setListClass(arr => {
                arr.splice(classIndex, 1);
                return [...arr]
            });
            setIconClass(arr => {
                arr.splice(arr.indexOf('color-primary'), 1);
                return [...arr];
            });
        } else {
            setListClass(arr => {
                arr.push(className);
                return [...arr];
            });
            setIconClass(arr => {
                arr.push('color-primary');
                return [...arr];
            });
        }
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
                <div className='home__select-lang'>
                    <div className={listClass.join(' ')}>
                        <span>DE</span>
                        <span>EN</span>
                    </div>
                    <LanguageIcon
                        className={iconClass}
                        fontSize='large'
                        onClick={showLangs}
                    />
                </div>
            </div>
        </Fragment>
    );
};

export default Home
