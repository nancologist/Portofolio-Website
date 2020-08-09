import React from "react";
import "./project.css";
import AssignmentIcon from '@material-ui/icons/Assignment';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';

const projects = [
    {
        title: 'Stiftung Warentest - jQuery to ES6',
        date: 'Jun 2020 - Present',
        tasks: [
            'Designing and implementing tests for the modules (using Jest & Puppeteer)',
            'Translating and improving the jQuery code into ES6 and above.',
            'Documenting the new implementation.',
            'Modifying the implemented ES6 according to the code reviews.'
        ]
    }
];

const project = () => {
    return projects.map((project) => {
        return (
            <div className="project">
                <h2 className="project__title">{project.title}</h2>
                <div className="project__date">
                    <CalendarTodayIcon fontSize="large"/>
                    <span className="project__date--text">{project.date}</span>
                </div>
                <div className="project__tasks">
                    <AssignmentIcon fontSize="large"/>
                    <ul className="project__tasks--list">
                        { project.tasks.map((task) => <li>{task}</li>) }
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
