import React from "react";
import "./project.css";
import AssignmentIcon from '@material-ui/icons/Assignment';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';

const projects = [
    {
        title: 'Stiftung Warentest Website - Frontend Consolidation (DPX)',
        date: 'Jun 2020 - Present',
        tasks: [
            'Designing and implementing automated E2E tests for the modules (using Jest & Puppeteer & JS)',
            'Translating and improving the jQuery code into ES6 code and above.',
            'Documenting the new implementations.',
            'Modifying the implemented ES6 code according to the reviews.'
        ]
    },
    {
        title: 'LDAP GUI (for DPX)',
        date: 'Dec 2019 - Mai 2020',
        tasks: [
            'Researching available open source LDAP libraries.',
            'Designing and implementing the web application (GUI) (using Python - Django)',
            'Implementing LDAP CRUD and Search functionalities (using python-ldap)',
            'Improving the application considering UX and functionalities'
        ]
    },
    {
        title: 'Georg Fischer Website - Test Automation (DPX)',
        date: 'Dec 2019 - Mai 2020',
        tasks: [
            'Defining E2E tests for the frontend components.',
            'Implementing and adding automated tests to project\'s pipeline (using Selenium & Java)',
            'Documenting the implemented tests.'
        ]
    },
    {
        title: 'Password Tool (for DPX)',
        date: 'Sep 2019 - Nov 2019',
        tasks: [
            'First project during Ausbildung FA.',
            'Creating a tool (webapp) to send the first password to the user in a secure way.',
            'Using Java and Spring to create the web application.'
        ]
    },
];

const project = () => {
    let index = 0;
    return projects.map((project) => {
        index++;
        return (
            <div className="project" key={index}>
                <h2 className="project__title">{project.title}</h2>
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
                <div className="project__brands">
                    Stiftung Warentest Logo - jQuery Logo - Puppeteer Logo
                </div>
            </div>
        )
    })
};

export default project;
