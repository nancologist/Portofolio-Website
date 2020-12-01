import React, {useState} from "react";

import ArrowDownBtn from "../../components/ui-components/arrowDownBtn";
import Project from "../../components/project/project";
import './about.css';
import {Snackbar} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";

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
                        <h2>Frontend</h2>
                    </div>
                    <div className="skill__list-item">
                        <h2>Backend</h2>
                        <h3>Others</h3>
                    </div>
                    <div className="skill__list-item">
                        <h2>Database</h2>
                    </div>
                    <div className="skill__list-item">
                        <h2>Other Languages</h2>
                    </div>
                    <div className="skill__list-item">
                        <h2>Tools</h2>
                    </div>
                    <div className="skill__list-item">
                        <h2>Others</h2>
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
