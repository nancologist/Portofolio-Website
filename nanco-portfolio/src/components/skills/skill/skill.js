import React from "react";
import Icon from '@mdi/react';
import {colors} from "../../../colors";

export default (props) => {
    return (
        <div className="skill__list-item">
            <div className="list-item__title">
                <h2>{props.title}</h2>
                <div className="skill-icon">
                    <props.IconTagName fontSize={'large'} />
                </div>
            </div>
            <div className="list-item__content">
                {props.techs.map((tech) => {
                    return (
                        <div className="list-item__content__tech" key={tech.techName} >
                            <Icon
                                className="list-item__content__tech__icon"
                                path={tech.techIcon}
                                color={colors.primary}
                                size={2}
                                title={tech.techIconTitle}
                            />
                            <span className="list-item__content__tech__text">
                                <strong>{tech.techName}</strong>
                                {tech.techDesc}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
