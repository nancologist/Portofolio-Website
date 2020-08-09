import React from "react";
import "./project.css";

const project = () => {
    return (
        <div className="project">
            <h2 className="project__title">Stiftung Warentest - jQuery to ES6</h2>
            <div className="project__date">Jun 2020 - Present</div>
            <div className="project__tasks">
                <ul>
                    <li>Designing and implementing tests for the modules (using Jest & Puppeteer)</li>
                    <li>Translating and improving the jQuery code into ES6 and above.</li>
                    <li>Documenting the new implementation.</li>
                    <li>Modifying the implemented ES6 according to the code reviews.</li>
                </ul>
            </div>
        </div>
    )
};

export default project;
