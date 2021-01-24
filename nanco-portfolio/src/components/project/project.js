import React, { Fragment } from "react";
import AppModal from "../ui-components/AppModal/AppModal";
import "./project.css";

import electronJsLogo from '../../images/brands/electronjs.svg.png';
import googleLighthouseLogo from '../../images/brands/google-lighthouse.svg';
import vueJsLogo from '../../images/brands/vuejs.png';
import vuetifyLogo from '../../images/brands/vuetify.png';

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
import lighthouseThumb from '../../images/work-thumbnails/lighthouse-deskapp.jpg'
import myPageThumb from '../../images/work-thumbnails/my-page.jpg'

const projects = [
    {
        title: 'Desktop App - Webpage Assessment Tool using Google Lighthouse',
        thumbnail: lighthouseThumb,
        customer: {
            logo: electronJsLogo,
            name: 'ElectronJS Logo'
        },
        date: 'Sep 2020 - Okt 2020',
        tasks: [
            'Allowing User to customize and configure Google Lighthouse scoring criteria and expectations',
            'Possibility to use both remote or local sitemaps entering URL or importing local xml files',
            'Reading Sitemap files and allow user to select multiple URLs for scoring by Google Lighthouse',
            'Adding Drag&Drop feature to ease importing sitemap files',
            'Cross platform application thanks to the ElectronJS',
            'Using Vue and Vuetify for the UI'
        ],
        tools: [
            {
                src: electronJsLogo,
                alt: 'ElectronJS Logo'
            },
            {
                src: googleLighthouseLogo,
                alt: 'Google Lighthouse Logo'
            },
            {
                src: vueJsLogo,
                alt: 'VueJS Logo'
            },
            {
                src: vuetifyLogo,
                alt: 'Vuetify Logo'
            }
        ]
    },
    {
        title: 'Stiftung Warentest - JavaScript Consolidation (DPX)',
        thumbnail: stiwaLogo,
        customer: {
            logo: stiwaLogo,
            name: 'Stiftung Warentest Logo'
        },
        date: 'Jun 2020 - August 2020',
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
            'Modifying JSON data for importing in the database.',
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
    const [currentProject, setCurrentProject] = React.useState(projects[0]);
    const [modalOpen, setModalOpen] = React.useState(false);

    const baseClass = 'project__overlay';
    const [overlayClass, setOverlayClass] = React.useState([baseClass]);
    // const [overlayStyle, setOverlayStyle] = React.useState({});

    const handleClick = (i) => {
        setCurrentProject(projects[i]);
        setModalOpen(true);
    };

    const slideInOverlay = (event) => {
        setOverlayClass([baseClass]); // Reset Classes
        const mousePosition = findMousePosition(event);

        switch (mousePosition) {
            case 'right':
                setOverlayClass(prevState => ([...prevState, 'overlay_from-left']));
                break;

            case 'left':
                setOverlayClass(prevState => ([...prevState, 'overlay_from-right']));
                break;

            case 'under':
                setOverlayClass(prevState => ([...prevState, 'overlay_from-top']));
                break;

            case 'above':
                break;
        }
    };

    // const slideOutOverlay = (event) => {
    //     // const el = event.currentTarget;
    //     setOverlayStyle({}); // Reset Inline Style
    //     setOverlayClass([baseClass]); // Reset Classes
    //     const mousePosition = findMousePosition(event);
    //     switch (mousePosition) {
    //         case 'right':
    //             setOverlayStyle({ transform: 'translateX(100%)' });
    //             break;
    //
    //         case 'left':
    //             setOverlayStyle({ transform: 'translateX(-100%)' });
    //             break;
    //
    //         case 'top':
    //             break;
    //
    //         case 'bottom':
    //             break;
    //     }
    // };

    const closeModal = () => { setModalOpen(false) };

    return (
        <Fragment>
            {
                projects.map((project, index) => {
                    return (
                        <div
                            className="project"
                            key={index}
                            onClick={handleClick.bind(this, index)}
                            onMouseEnter={slideInOverlay}
                            style={{ backgroundImage: `url(${project.thumbnail})` }}
                        >
                            <div className={overlayClass.join(' ')}>
                                <h3 className="overlay__title">{project.title}</h3>
                            </div>
                        </div>
                    )
                })
            }
            <AppModal
                handleClose={closeModal}
                open={modalOpen}
                project={currentProject}
            />
        </Fragment>
    );
};

export default project;

function findMousePosition(e) {
    const el = e.currentTarget;
    const { width, height } = el.getBoundingClientRect();

    const { pageX: x, pageY: y} = e.nativeEvent;
    const yMin = el.offsetTop;
    const yMax = el.offsetTop + height;
    const xMin = el.offsetLeft;
    const xMax = el.offsetLeft + width;

    const miscalculation = 20;
    const isMouseRightOfEl = yMin <= y <= yMax && xMax - miscalculation <= x;
    const isMouseLeftOfEl = yMin <= y <= yMax && x <= xMin + miscalculation;
    const isMouseUnderEl = xMin <= x <= xMax && yMax - miscalculation <= y;
    const isMouseAboveEl = xMin <= x <= xMax && y <= yMin + miscalculation;

    if (isMouseRightOfEl) return 'right';
    if (isMouseLeftOfEl) return 'left';
    if (isMouseAboveEl) return 'above';
    if (isMouseUnderEl) return 'under';
}
