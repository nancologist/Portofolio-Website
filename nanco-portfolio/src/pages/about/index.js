import React from "react";

import ArrowDownBtn from "../../components/ui-components/arrowDownBtn";
import Project from "../../components/project/project";
import './about.css';

export default () => (
    <div className="page-container about">
        <div className="section-bio">
            <div className="about-pic-container">
                <div className="about-pic"/>
            </div>
            <div className="about-content">
                <h2>Codes, bugs, errors, my second family.</h2>
                <p>
                    In July 2019 I have changed my career from Physics to IT and started my apprenticeship at <a target="_blank" href="https://www.digitaspixelpark.com/">Digitas Pixelpark</a>. It was not an overnight decision. My bachelor thesis had a small programming part with Matlab. It was a great experience for me, because more than coding I discovered that I love challenging errors and bugs! The longer it takes to solve them, the more excited I am to solve it. Giving up is no option for me.
                </p>
                <p>
                    In the last two years I have learned and tried dozens of languages and frameworks: Java, Python, PHP, JavaScript, Spring, Django, Vue, React, NodeJS, Express etc. to find the right one for me. Surprisingly I loved them all. They are all some kind of artworks to me, with different aspects and features.
                </p>
            </div>
        </div>
        <div className="section-projects">
            <h1 className="section-projects--title">Projects</h1>
            <Project/>
        </div>
        <div className="section-skills"></div>
    </div>
);