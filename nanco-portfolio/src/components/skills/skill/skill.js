import React, { useRef, useState } from "react";
import Tech from './tech/tech';
import './skill.css';
import { isElementVisible } from '../../../util/util';

export default (props) => {
    const myRef = useRef(null);
    const [classes, setClasses] = useState(['skill__list-item']);

    React.useEffect(() => {
        window.addEventListener('scroll', () => {
            if (isElementVisible(myRef.current)) {
                setClasses(prev => {
                    if (prev.length == 1) {
                        return [...prev, 'skill_in-viewport']
                    }
                    return prev;
                });
            }
        })
    }, [])

    return (
        <div 
            className={classes.join(' ')} 
            // onScroll={test}
            ref={myRef}
        >
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
                        key={tech.techName}
                    />
                ))}
            </div>
        </div>
    );
};
