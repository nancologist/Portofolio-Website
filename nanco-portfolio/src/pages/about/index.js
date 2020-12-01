import React, {useState} from "react";

import ArrowDownBtn from "../../components/ui-components/arrowDownBtn";
import Project from "../../components/project/project";
import './about.css';
import {Snackbar} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import StorageIcon from '@material-ui/icons/Storage';
import FlipToFrontIcon from '@material-ui/icons/FlipToFront';
import SettingsIcon from '@material-ui/icons/Settings';
import TranslateIcon from '@material-ui/icons/Translate';
import BuildIcon from '@material-ui/icons/Build';
import ComputerIcon from '@material-ui/icons/Computer';

import Icon from '@mdi/react';
import {
    mdiLanguageJava, mdiNodejs, mdiLanguagePython, mdiLanguagePhp, mdiGraphql,
    mdiReact, mdiVuejs, mdiLanguageJavascript, mdiLanguageTypescript, mdiSass,
    mdiLanguageCss3, mdiLanguageHtml5, mdiJquery, mdiDatabase, mdiLanguageCsharp,
    mdiLanguageR, mdiGit, mdiGithub, mdiGitlab, mdiFirebase
} from '@mdi/js';
import {colors} from "../../colors";

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default (props) => {
    const [msgOpen, setMsgOpen] = useState(false);

    if (props.location.state) {
        if (props.location.state.open) {
            setMsgOpen(true);
            props.location.state.open = false;
        }
    }

    const closeMsg = () => {
        setMsgOpen(false);
    };

    return (
        <div className="page-container about">
            <div className="section-bio">
                <div className="about-pic-container">
                    <div className="about-pic"/>
                </div>
                <div className="bio__content__text">
                    <p className="bio__content__title">Codes, bugs, errors, my second family.</p>
                    <p className="bio__content__text">
                        In July 2019 I have changed my career from Physics to IT and started my apprenticeship at <a target="_blank" href="https://www.digitaspixelpark.com/">Digitas Pixelpark</a>. It was not an overnight decision. My bachelor thesis had a small programming part with Matlab. It was a great experience for me, because more than coding I discovered that I love challenging errors and bugs! The longer it takes to solve them, the more excited I am to solve it. Giving up is no option for me.
                    </p>
                    <p className="bio__content__text">
                        In the last two years I have learned and tried dozens of languages and frameworks: Java, Python, PHP, JavaScript, Spring, Django, Vue, React, NodeJS, Express etc. to find the right one for me. Surprisingly I loved them all. They are all some kind of artworks to me, with different aspects and features.
                    </p>
                </div>
            </div>
            <div className="section-skills">
                <h1 className="section__title">Skills</h1>
                <div className="skill__list">

                    <div className="skill__list-item">
                        <div className="list-item__title">
                            <h2>Frontend</h2>
                            <div className="skill-icon">
                                <FlipToFrontIcon fontSize={'large'} />
                            </div>
                        </div>
                        <div className="list-item__content">
                            <div className="list-item__content__tech">
                                <Icon
                                    className="list-item__content__tech__icon"
                                    path={mdiReact}
                                    color={colors.primary}
                                    size={2}
                                    title={'ReactJS'}
                                />
                                <span className="list-item__content__tech__text">
                                    <strong>ReactJS - </strong>
                                    Redux, Gatsby, NextJS, Material-UI
                                </span>
                            </div>
                            <div className="list-item__content__tech">
                                <Icon
                                    className="list-item__content__tech__icon"
                                    path={mdiVuejs}
                                    color={colors.primary}
                                    size={2}
                                    title={'VueJS'}
                                />
                                <span className="list-item__content__tech__text">
                                    <strong>VueJS - </strong>
                                    Vuex, NuxtJS, Vuetify
                                </span>
                            </div>
                            <div className="list-item__content__tech"
                                 style={{'margin-top': '10px'}}
                            >
                                <Icon
                                    className="list-item__content__tech__icon"
                                    path={mdiLanguageJavascript}
                                    color={colors.primary}
                                    size={2}
                                    title={'Javascript'}
                                />
                                <Icon
                                    className="list-item__content__tech__icon"
                                    path={mdiLanguageTypescript}
                                    color={colors.primary}
                                    size={2}
                                    title={'Typescript'}
                                />
                                <Icon
                                    className="list-item__content__tech__icon"
                                    path={mdiJquery}
                                    color={colors.primary}
                                    size={2}
                                    title={'jQuery'}
                                />
                                <Icon
                                    className="list-item__content__tech__icon"
                                    path={mdiSass}
                                    color={colors.primary}
                                    size={2}
                                    title={'Sass'}
                                />
                                <Icon
                                    className="list-item__content__tech__icon"
                                    path={mdiLanguageCss3}
                                    color={colors.primary}
                                    size={2}
                                    title={'CSS'}
                                />
                                <Icon
                                    className="list-item__content__tech__icon"
                                    path={mdiLanguageHtml5}
                                    color={colors.primary}
                                    size={2}
                                    title={'HTML'}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="skill__list-item">
                        <div className="list-item__title">
                            <h2>Backend</h2>
                            <div className="skill-icon">
                                <SettingsIcon fontSize={'large'} />
                            </div>
                        </div>
                        <div className="list-item__content">
                            <div className="list-item__content__tech">
                                <Icon
                                    className="list-item__content__tech__icon"
                                    path={mdiLanguageJava}
                                    color={colors.primary}
                                    size={2}
                                    title={'Java'}
                                />
                                <span className="list-item__content__tech__text">
                                    <strong>Java - </strong>
                                    Spring MVC, Maven, Thymeleaf, JUnit, Mockito, Selenium
                                </span>
                            </div>
                            <div className="list-item__content__tech">
                                <Icon
                                    className="list-item__content__tech__icon"
                                    path={mdiNodejs}
                                    color={colors.primary}
                                    size={2}
                                    title={'NodeJS'}
                                />
                                <span className="list-item__content__tech__text">
                                    <strong>NodeJS - </strong>
                                    ExpressJS, Typescript, Sequelize, Mongoose, Pug, EJS, Handlebars
                                </span>
                            </div>
                            <div className="list-item__content__tech">
                                <Icon
                                    className="list-item__content__tech__icon"
                                    path={mdiLanguagePython}
                                    color={colors.primary}
                                    size={2}
                                    title={'Python'}
                                />
                                <span className="list-item__content__tech__text">
                                    <strong>Python - </strong>
                                    Django, PythonLDAP
                                </span>
                            </div>
                            <div className="list-item__content__tech">
                                <Icon
                                    className="list-item__content__tech__icon"
                                    path={mdiLanguagePhp}
                                    color={colors.primary}
                                    size={2}
                                    title={'PHP'}
                                />
                                <span className="list-item__content__tech__text">
                                    <strong>PHP</strong>
                                </span>
                            </div>
                            <div className="list-item__content__tech">
                                <Icon
                                    className="list-item__content__tech__icon"
                                    path={mdiGraphql}
                                    color={colors.primary}
                                    size={2}
                                    title={'GraphQL'}
                                />
                                <span className="list-item__content__tech__text">
                                    <strong>GraphQL</strong>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="skill__list-item">
                        <div className="list-item__title">
                            <h2>Database</h2>
                            <div className="skill-icon">
                                <StorageIcon fontSize={'large'} />
                            </div>
                        </div>
                        <div className="list-item__content">
                            <div className="list-item__content__tech">
                                <Icon
                                    className="list-item__content__tech__icon"
                                    path={mdiDatabase}
                                    color={colors.primary}
                                    size={2}
                                    title={'Database'}
                                />
                                <span className="list-item__content__tech__text">
                                    <strong>MongoDB - </strong> Atlas, Compass
                                </span>
                            </div>
                            <div className="list-item__content__tech">
                                <Icon
                                    className="list-item__content__tech__icon"
                                    path={mdiDatabase}
                                    color={colors.primary}
                                    size={2}
                                    title={'Database'}
                                />
                                <span className="list-item__content__tech__text">
                                    <strong>Firebase</strong> (NoSQL)
                                </span>
                            </div>
                            <div className="list-item__content__tech">
                                <Icon
                                    className="list-item__content__tech__icon"
                                    path={mdiDatabase}
                                    color={colors.primary}
                                    size={2}
                                    title={'Database'}
                                />
                                <span className="list-item__content__tech__text">
                                    <strong>MS-SQL </strong>
                                </span>
                            </div>
                            <div className="list-item__content__tech">
                                <Icon
                                    className="list-item__content__tech__icon"
                                    path={mdiDatabase}
                                    color={colors.primary}
                                    size={2}
                                    title={'Database'}
                                />
                                <span className="list-item__content__tech__text">
                                    <strong>MySQL - </strong>
                                    PhpMyAdmin
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="skill__list-item">
                        <div className="list-item__title">
                            <h2>Other Languages</h2>
                            <div className="skill-icon">
                                <TranslateIcon fontSize={'large'} />
                            </div>
                        </div>
                        <div className="list-item__content">
                            <div className="list-item__content__tech">
                                <Icon
                                    className="list-item__content__tech__icon"
                                    path={mdiLanguageCsharp}
                                    color={colors.primary}
                                    size={2}
                                    title={'CSharp'}
                                />
                                <span className="list-item__content__tech__text">
                                    <strong>CSharp - </strong> Rider, VisualStudio
                                </span>
                            </div>
                            <div className="list-item__content__tech">
                                <Icon
                                    className="list-item__content__tech__icon"
                                    path={mdiLanguageR}
                                    color={colors.primary}
                                    size={2}
                                    title={'R'}
                                />
                                <span className="list-item__content__tech__text">
                                    <strong>R - </strong> For Machine Learning Purposes
                            </span>
                            </div>
                        </div>
                    </div>

                    <div className="skill__list-item">
                        <div className="list-item__title">
                            <h2>Tools</h2>
                            <div className="skill-icon">
                                <BuildIcon fontSize={'large'} />
                            </div>
                        </div>
                        <div className="list-item__content">
                            <div className="list-item__content__tech">
                                <Icon
                                    className="list-item__content__tech__icon"
                                    path={mdiGithub}
                                    color={colors.primary}
                                    size={2}
                                    title={'Github'}
                                />
                                <span className="list-item__content__tech__text">
                                    <strong>Github - </strong> For business and personal projects.
                                </span>
                            </div>
                            <div className="list-item__content__tech">
                                <Icon
                                    className="list-item__content__tech__icon"
                                    path={mdiGitlab}
                                    color={colors.primary}
                                    size={2}
                                    title={'Gitlab'}
                                />
                                <span className="list-item__content__tech__text">
                                    <strong>GitLab - </strong> used for business projects.
                                </span>
                            </div>
                            <div className="list-item__content__tech">
                                <Icon
                                    className="list-item__content__tech__icon"
                                    path={mdiGit}
                                    color={colors.primary}
                                    size={2}
                                    title={'Git'}
                                />
                                <span className="list-item__content__tech__text">
                                    <strong>Git - </strong> daily use.
                                </span>
                            </div>
                            <div className="list-item__content__tech">
                                <Icon
                                    className="list-item__content__tech__icon"
                                    path={mdiFirebase}
                                    color={colors.primary}
                                    size={2}
                                    title={'Firebase'}
                                />
                                <span className="list-item__content__tech__text">
                                    <strong>Google Firebase - </strong> NoSQL Database and BaaS (Backend as a Service)
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="skill__list-item">
                        <div className="list-item__title">
                            <h2>Others</h2>
                            <div className="skill-icon">
                                <ComputerIcon fontSize={'large'} />
                            </div>
                        </div>
                        <div className="list-item__content">
                            <p style={{color: '#ccc'}}>
                                MacOS X, Bash, Terminal (Bash), LDAP, Assembly 6502,
                            </p>
                            <p style={{color: '#ccc'}}>
                                ML (R, Python), Deno, 10-Finger-Schreiben
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-projects">
                <h1 className="section__title">Works</h1>
                <div className="section-projects__items">
                    <Project/>
                </div>
            </div>
            <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right'}}
                autoHideDuration={5000}
                open={msgOpen}
                onClose={closeMsg}
            >
                <Alert severity="success">
                    Your message successfully sent!
                </Alert>
            </Snackbar>
        </div>
    );
};
