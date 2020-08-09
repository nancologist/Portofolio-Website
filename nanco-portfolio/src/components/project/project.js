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

import ppLogo from '../../images/brands/newpp.png';
import djangoLogo from '../../images/brands/django.jpg';
import pythonLogo from '../../images/brands/Python.svg.png';
import mdbLogo from '../../images/brands/mdb.jpeg';

import gfLogo from '../../images/brands/gf.png';
import javaLogo from '../../images/brands/java.jpg';
import seleniumLogo from '../../images/brands/selenium.jpg';

import springLogo from '../../images/brands/spring.png';
import cssLogo from '../../images/brands/css.png';

const projects = [
    {
        title: 'Stiftung Warentest Website - JS Consolidation (DPX)',
        customer: {
            logo: stiwaLogo,
            name: 'Stiftung Warentest Logo'
        },
        date: 'Jun 2020 - Present',
        tasks: [
            'Designing and implementing automated E2E tests for the modules (using Jest & Puppeteer & JS)',
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
        title: 'LDAP GUI (DPX)',
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
        customer: {
            logo: gfLogo,
            name: 'Georg Fischer'
        },
        date: 'Dec 2019 - Mai 2020',
        tasks: [
            'Defining E2E tests for the frontend components.',
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
                <div className="project__tools">
                    <div className="project__tools--icon">
                        <BuildIcon fontSize="large"/>
                    </div>
                    {
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
                    }
                </div>
        }
        return (
            <div className="project" key={index}>
                <div className="project__title">
                    {customerLogo}
                    <h2>{project.title}</h2>
                </div>
                <div className="project__date">
                    <CalendarTodayIcon fontSize="large"/>
                    <span className="project__date--text">{project.date}</span>
                </div>
                <div className="project__tasks">
                    <AssignmentIcon fontSize="large"/>
                    <ul className="project__tasks--list">
                        {
                            project.tasks.map((task) => {
                                index++;
                                return <li key={index}>{task}</li>
                            })
                        }
                    </ul>
                </div>
                {tools}
            </div>
        )
    })
};

export default project;
