import React, { useEffect, useState } from 'react';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import './skills.css';
import Skill from '../../components/skills/skill/skill';
import { skills } from '../../components/skills/data';


export default () => {
    const [renderedArrows, setRenderedArrows] = useState([]);

    useEffect(() => {
        let classNum = 1;
        const intervalId = 
            setInterval(
                () => {
                    if (classNum < 4) {
                        const arrowEl = <div className={`arrows__arrow arrow${classNum}`} key={classNum}><ArrowForwardIosIcon/></div>
                        setRenderedArrows(prev => [ ...prev, arrowEl ])
                        classNum++;
                    } else {
                        classNum = 1;
                        setRenderedArrows([]);
                    }
                },
                500
            );

        document.addEventListener('scroll',
            () => {
                clearInterval(intervalId);
                setRenderedArrows([]);
            },
            { once: true, passive: true, capture: true }
        );
    }, []);

    return (
        <div className="page-container">
            <div className="arrows arrows--left">
                {renderedArrows.map(item => item)}
            </div>
            <div className="arrows arrows--right">
                {renderedArrows.map(item => item)}
            </div>
            <div className="skill__list">{skills.map((skill) => (
                <Skill
                    title={skill.title}
                    key={skill.title}
                    IconTagName={skill.IconTagName}
                    techs={skill.techs}
                /> 
            ))}</div>
        </div>
    );
}
