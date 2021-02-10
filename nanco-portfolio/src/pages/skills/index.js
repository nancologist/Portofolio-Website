import React from 'react';

import './skills.css';
import Skill from '../../components/skills/skill/skill';
import { skills } from '../../components/skills/data';


export default () => {
    return (
        <div className="page-container">
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
