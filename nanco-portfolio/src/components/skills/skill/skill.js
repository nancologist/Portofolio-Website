import React from "react";
import FlipToFrontIcon from "@material-ui/icons/FlipToFront";
import {mdiJquery, mdiLanguageCss3, mdiLanguageHtml5, mdiLanguageJavascript, mdiLanguageTypescript, mdiReact, mdiSass, mdiVuejs} from "@mdi/js";
import {colors} from "../../../colors";

export default (props) => {
    return (
        <div className="skill__list-item">
            <div className="list-item__title">
                <h2>{props.title}</h2>
                <div className="skill-icon">
                    <props.titleIcon fontSize={'large'} />
                </div>
            </div>
            <div className="list-item__content">
                <div className="list-item__content__tech">
                    <Icon
                        className="list-item__content__tech__icon"
                        path={props.techs.techIcon}
                        color={colors.primary}
                        size={2}
                        title={props.techs.techIconTitle}
                    />
                    <span className="list-item__content__tech__text">
                        <strong>{props.techs.techName}</strong>
                        {props.techs.techDesc}
                    </span>
                </div>
                <div className="list-item__content__tech">
                    <Icon
                        className="list-item__content__tech__icon"
                        path={props.techs.techIcon}
                        color={colors.primary}
                        size={2}
                        title={props.techs.techIconTitle}
                    />
                    <span className="list-item__content__tech__text">
                        <strong>{props.techs.techName}</strong>
                        {props.techs.techDesc}
                    </span>
                </div>
                <div className="list-item__content__tech"
                     style={props.techs.techInlineStyle}
                >
                    <Icon
                        className="list-item__content__tech__icon"
                        path={props.techs.techIcon}
                        color={colors.primary}
                        size={2}
                        title={props.techs.techIconTitle}
                    />
                    <Icon
                        className="list-item__content__tech__icon"
                        path={props.techs.techIcon}
                        color={colors.primary}
                        size={2}
                        title={props.techs.techIconTitle}
                    />
                    <Icon
                        className="list-item__content__tech__icon"
                        path={props.techs.techIcon}
                        color={colors.primary}
                        size={2}
                        title={props.techs.techIconTitle}
                    />
                    <Icon
                        className="list-item__content__tech__icon"
                        path={props.techs.techIcon}
                        color={colors.primary}
                        size={2}
                        title={props.techs.techIconTitle}
                    />
                    <Icon
                        className="list-item__content__tech__icon"
                        path={props.techs.techIcon}
                        color={colors.primary}
                        size={2}
                        title={props.techs.techIconTitle}
                    />
                    <Icon
                        className="list-item__content__tech__icon"
                        path={props.techs.techIcon}
                        color={colors.primary}
                        size={2}
                        title={props.techs.techIconTitle}
                    />
                </div>
            </div>
        </div>
    );
}
