import React from "react";
import {colors} from "../../../../colors";
import Icon from '@mdi/react';
import './tech.css';

export default (props) => {
    return (
        <div className="list-item__content__tech" key={props.name}>
            <Icon
                className="list-item__content__tech__icon"
                path={props.iconPath}
                color={colors.primary}
                size={2}
                title={props.iconTitle}
            />
            <span className="list-item__content__tech__text">
                <strong>{props.name}</strong>
                {props.desc}
            </span>
        </div>
    );
}
