import React from "react";
import StorageIcon from '@material-ui/icons/Storage';
import FlipToFrontIcon from '@material-ui/icons/FlipToFront';
import SettingsIcon from '@material-ui/icons/Settings';
import TranslateIcon from '@material-ui/icons/Translate';
import BuildIcon from '@material-ui/icons/Build';
import ComputerIcon from '@material-ui/icons/Computer';
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';
import Icon from '@mdi/react';
import {
    mdiLanguageJava, mdiNodejs, mdiLanguagePython, mdiLanguagePhp, mdiGraphql,
    mdiReact, mdiVuejs, mdiLanguageJavascript, mdiLanguageTypescript, mdiSass,
    mdiLanguageCss3, mdiLanguageHtml5, mdiJquery, mdiDatabase, mdiLanguageCsharp,
    mdiLanguageR, mdiGit, mdiGithub, mdiGitlab, mdiFirebase, mdiBookMultiple, mdiRobotAngry
} from '@mdi/js';

import {colors} from "../../colors";

export default () => {
    return (
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
                    <div className="list-item__content__tech">
                        <Icon
                            className="list-item__content__tech__icon"
                            path={mdiRobotAngry}
                            color={colors.primary}
                            size={2}
                            title={'Firebase'}
                        />
                        <span className="list-item__content__tech__text">
                                    <strong>Machine Learning - </strong> R, Python : Data Cleaning, Linear Regression
                                </span>
                    </div>
                    <div className="list-item__content__tech">
                        <VideogameAssetIcon
                            fontSize={'large'} style={{
                            color: colors.primary,
                            transform: 'scale(1.2)'
                        }}
                        />
                        <span className="list-item__content__tech__text">
                                    <strong> Assembly 6502</strong>
                                </span>
                    </div>
                    <div className="list-item__content__tech">
                        <Icon
                            className="list-item__content__tech__icon"
                            path={mdiBookMultiple}
                            color={colors.primary}
                            size={2}
                            title={'Firebase'}
                        />
                        <span className="list-item__content__tech__text">
                                    MacOS X, Windows 10, Bash, Terminal (Bash), LDAP, Assembly 6502,
                                </span>
                        <span className="list-item__content__tech__text">
                                    Machine Learning (R, Python), Deno, 10-Fingers-Typing
                                </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

const skills = [
    {
        title: 'Frontend',
        titleIcon: 'FlipToFrontIcon',
        techs: [
            {
                techName: 'ReactJS - ',
                techDesc: 'Redux, Gatsby, NextJS, Material-UI',
                techIcon: 'mdiReact',
                techIconTitle: 'ReactJS'
            },
            {
                techName: 'VueJS - ',
                techDesc: 'Redux, Gatsby, NextJS, Material-UI',
                techIcon: 'mdiReact',
                techIconTitle: 'ReactJS',
                techInlineStyle: {'margin-top': '10px'}
            },
            {
                techName: 'VueJS - ',
                techDesc: 'Redux, Gatsby, NextJS, Material-UI',
                techIcon: 'mdiReact',
                techIconTitle: 'ReactJS',
                techInlineStyle: {'margin-top': '10px'}
            },
            {
                techName: 'VueJS - ',
                techDesc: 'Redux, Gatsby, NextJS, Material-UI',
                techIcon: 'mdiReact',
                techIconTitle: 'ReactJS',
                techInlineStyle: {'margin-top': '10px'}
            },
            {
                techName: 'VueJS - ',
                techDesc: 'Redux, Gatsby, NextJS, Material-UI',
                techIcon: 'mdiReact',
                techIconTitle: 'ReactJS',
                techInlineStyle: {'margin-top': '10px'}
            },
            {
                techName: 'VueJS - ',
                techDesc: 'Redux, Gatsby, NextJS, Material-UI',
                techIcon: 'mdiReact',
                techIconTitle: 'ReactJS',
                techInlineStyle: {'margin-top': '10px'}
            },
            {
                techName: 'VueJS - ',
                techDesc: 'Redux, Gatsby, NextJS, Material-UI',
                techIcon: 'mdiReact',
                techIconTitle: 'ReactJS',
                techInlineStyle: {'margin-top': '10px'}
            },
            {
                techName: 'VueJS - ',
                techDesc: 'Redux, Gatsby, NextJS, Material-UI',
                techIcon: 'mdiReact',
                techIconTitle: 'ReactJS',
                techInlineStyle: {'margin-top': '10px'}
            },
            {
                techName: 'VueJS - ',
                techDesc: 'Redux, Gatsby, NextJS, Material-UI',
                techIcon: 'mdiReact',
                techIconTitle: 'ReactJS',
                techInlineStyle: {'margin-top': '10px'}
            },
            {
                techName: 'VueJS - ',
                techDesc: 'Redux, Gatsby, NextJS, Material-UI',
                techIcon: 'mdiReact',
                techIconTitle: 'ReactJS',
                techInlineStyle: {'margin-top': '10px'}
            }
        ]
    }
];
