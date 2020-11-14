import React from "react";
import "./project.css";
import AssignmentIcon from '@material-ui/icons/Assignment';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import BuildIcon from '@material-ui/icons/Build';

import stiwaLogo from '../../images/brands/stiwa.svg';
import es6Logo from '../../images/brands/es6.png';
import eslintLogo from '../../images/brands/eslint.png';
import puppLogo from '../../images/brands/puppeteer.png';
import jestLogo from '../../images/brands/jest.jpg';
import sassLogo from '../../images/brands/sass.jpg';
import jqueryLogo from '../../images/brands/jquery.jpg';

import gatsbyLogo from '../../images/brands/gatsby.png';
import reactLogo from '../../images/brands/react.png';
import materialUiLogo from '../../images/brands/materialui.svg';
import myPortfolioLogo from '../../images/logo.svg';
import netlifyLogo from '../../images/brands/netlify.png';

import vhsKurseLogo from '../../images/brands/vhsKurse.png';
import firebaseLogo from '../../images/brands/firebase.png';
import reduxLogo from '../../images/brands/redux.png';

import ppLogo from '../../images/brands/newpp.png';
import djangoLogo from '../../images/brands/django.jpg';
import pythonLogo from '../../images/brands/Python.svg.png';
import mdbLogo from '../../images/brands/mdb.jpeg';

import gfLogo from '../../images/brands/gf.png';
import javaLogo from '../../images/brands/java.jpg';
import seleniumLogo from '../../images/brands/selenium.jpg';

import springLogo from '../../images/brands/spring.png';
import cssLogo from '../../images/brands/css.png';

// Works' Thumbnails
import stiwaThumb from '../../images/work-thumbnails/stiwa.png'
import lighthouseThumb from '../../images/work-thumbnails/lighthouse-deskapp.png'
import myPageThumb from '../../images/work-thumbnails/my-page.png'

const projects = [
    {
        title: 'Desktop App - Websites Assessment Tool using Google Lighthouse',
        thumbnail: lighthouseThumb
    },
    {
        title: 'Stiftung Warentest - JavaScript Consolidation (DPX)',
        thumbnail: stiwaLogo,
        customer: {
            logo: stiwaLogo,
            name: 'Stiftung Warentest Logo'
        },
        date: 'Jun 2020 - Present',
        tasks: [
            'Designing and implementing automated E2E tests for the UI components (using Jest & Puppeteer & JS)',
            'Replacing and improving the jQuery code with ES6 standards and above.',
            'Documenting the new implementations.',
            'Modifying the implemented ES6 code according to the reviews.'
        ],
        tools: [
            {
                src: es6Logo,
                alt: 'ES6 Logo'
            },
            {
                src: eslintLogo,
                alt: 'ESLint Logo'
            },
            {
                src: puppLogo,
                alt: 'Puppeteer Logo'
            },
            {
                src: jestLogo,
                alt: 'Jest Logo'
            },
            {
                src: sassLogo,
                alt: 'Sass Logo'
            },
            {
                src: jqueryLogo,
                alt: 'jQuery Logo'
            }
        ]
    },
    {
        title: 'Volkshochschulkurse (School Project)',
        thumbnail: vhsKurseLogo,
        customer: {
            logo: vhsKurseLogo,
            name: 'VHS-Kurse Logo'
        },
        date: 'Mai 2020 - Jun 2020',
        tasks: [
            'Modifying data for importing in data base.',
            'Creating a platform from scratch for users to search between the offered courses of Berliner Volkshochschulen with multiple filters',
            'Using Google Firebase as NoSQL database and Rest API service.',
            'Using Redux for state management.',
            'Using Axios for the communication between backend and user interface.'
        ],
        tools: [
            {
                src: reactLogo,
                alt: 'React Logo'
            },
            {
                src: firebaseLogo,
                alt: 'Firebase Logo'
            },
            {
                src: reduxLogo,
                alt: 'Redux Logo'
            },
            {
                src: cssLogo,
                alt: 'CSS Logo'
            },
        ]
    },
    {
        title: 'My Playground!',
        thumbnail: myPageThumb,
        customer: {
            logo: myPortfolioLogo,
            name: 'Logo of My Portfolio'
        },
        date: 'Jan 2020 - Present',
        tasks: [
            'Creating a platform from scratch to present my own works.',
            'Having an own experimental playground for testing frontend features.',
            'Using Gatsby, one of the most popular frameworks to create static pages.',
            'Using Material-UI.',
            'Implementing Google ReCAPTCHA V2 for contact form to prevent spams.',
            'Internationalizing website (adding German).',
            'Deploying page on Netlify via Github.'
        ],
        tools: [
            {
                src: netlifyLogo,
                alt: 'Netlify Logo'
            },
            {
                src: gatsbyLogo,
                alt: 'Gatsby Logo'
            },
            {
                src: reactLogo,
                alt: 'React Logo'
            },
            {
                src: materialUiLogo,
                alt: 'Material UI Logo'
            },
            {
                src: cssLogo,
                alt: 'CSS Logo'
            }
        ]
    },
    {
        title: 'LDAP GUI (DPX)',
        thumbnail: ppLogo,
        customer: {
            logo: ppLogo,
            name: 'Digitas Pixelpark'
        },
        date: 'Dec 2019 - Mai 2020',
        tasks: [
            'Researching available open source LDAP libraries.',
            'Designing and implementing the web application (GUI) (using Python - Django)',
            'Implementing LDAP CRUD and Search functionalities (using python-ldap)',
            'Improving the application considering UX and functionalities'
        ],
        tools: [
            {
                src: djangoLogo,
                alt: 'Django Logo'
            },
            {
                src: pythonLogo,
                alt: 'Python Logo'
            },
            {
                src: es6Logo,
                alt: 'ES6 Logo'
            },
            {
                src: mdbLogo,
                alt: 'Material Design Bootstrap Logo'
            },
        ]
    },
    {
        title: 'Georg Fischer Website - Test Automation (DPX)',
        thumbnail: gfLogo,
        customer: {
            logo: gfLogo,
            name: 'Georg Fischer'
        },
        date: 'Dec 2019 - Mai 2020',
        tasks: [
            'Defining E2E tests for the UI components.',
            'Implementing and adding automated tests to project\'s pipeline (using Selenium & Java)',
            'Documenting the implemented tests.'
        ],
        tools: [
            {
                src: javaLogo,
                alt: 'Java Logo'
            },
            {
                src: seleniumLogo,
                alt: 'Selenium Logo'
            }
        ]
    },
    {
        title: 'Password Tool (DPX)',
        thumbnail: ppLogo,
        customer: {
            logo: ppLogo,
            name: 'Digitas Pixelpark'
        },
        date: 'Sep 2019 - Nov 2019',
        tasks: [
            'First project during Ausbildung FA.',
            'Creating a tool (webapp) to send the first password to the user in a secure way.',
            'Using Java and Spring Framework to create the web application.'
        ],
        tools: [
            {
                src: javaLogo,
                alt: 'Java Logo'
            },
            {
                src: springLogo,
                alt: 'Spring Framework Logo'
            },
            {
                src: cssLogo,
                alt: 'CSS Logo'
            }
        ]
    },
];

const project = () => {
    let index = 0;

    return projects.map((project) => {
        index++;
        let customerLogo = null;
        let tools = null;

        if (project.customer) {
            customerLogo = <div className="project__title__customer-logo">
                <img src={project.customer.logo} alt={"Logo of Customer " + project.customer.name}/>
            </div>;
        }

        if (project.tools) {
            tools =
                <div className="project__feature project__tools">
                    <div className="project__tools--icon">
                        <BuildIcon className='project__feature__icon' fontSize="large"/>
                    </div>
                    <div>{
                        project.tools.map(
                            (brand) =>
                            {
                                index++;
                                return (
                                    <div key={index} className="project__tools--img-wrapper">
                                        <img src={brand.src} alt={brand.alt}/>
                                    </div>
                                )
                            }
                        )
                    }</div>
                </div>
        }

        return (
            <div
                className="project"
                key={index}
                style={{ 'background-image': `url(${project.thumbnail})` }}
            >
                <div className="project__overlay">
                    <h3 className="overlay__title">{project.title}</h3>
                </div>
            </div>
        )
    })
};

export default project;

/*
"Project Details" - For Modal After clicking on "Project Thumbnail":

<div className="project__feature project__title">
    <div className="project__title__customer-logo">
        {customerLogo}
    </div>
    <h2>{project.title}</h2>
</div>
<div className="project__feature project__date">
    <CalendarTodayIcon className='project__feature__icon' fontSize="large"/>
    <span className="project__date--text">{project.date}</span>
</div>
<div className="project__feature project__tasks">
    <AssignmentIcon className='project__feature__icon' fontSize="large"/>
    <ul className="project__tasks--list">
        {
            project.tasks.map((task) => {
                index++;
                return <li className="project__tasks--list-item" key={index}>{task}</li>
            })
        }
    </ul>
</div>
{tools}

* */
