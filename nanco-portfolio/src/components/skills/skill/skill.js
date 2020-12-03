import React from "react";
import Tech from './tech/tech';
import './skill.css';

export default (props) => (
    <div className="skill__list-item">
        <div className="list-item__title">
            <h2>{props.title}</h2>
            <div className="skill-icon">
                <props.IconTagName fontSize={'large'} />
            </div>
        </div>
        <div className="list-item__content">
            {props.techs.map((tech) => (
                <Tech
                    iconPath={tech.techIcon}
                    iconTitle={tech.techIconTitle}
                    name={tech.techName}
                    desc={tech.techDesc}
                />
            ))}
        </div>
    </div>
);
