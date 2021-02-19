import React, { useState, useEffect } from "react";

import AppModal from "../../components/ui-components/AppModal/AppModal";
import { findMousePosition } from '../../components/pages/works/utils';
import { works } from '../../components/pages/works/data';
import './works.css';

import githubLogo from '../../images/github-white.png'
import githubMark from '../../images/githubMark.png'

const Works = () => {
    const [currentWork, setCurrentWork] = useState(works[0]);
    const [modalOpen, setModalOpen] = useState(false);

    const baseClass = 'work__overlay';
    const [overlayClass, setOverlayClass] = useState([baseClass]);

    const handleClick = (event) => {
        const index = works.findIndex(work => work.title === event.currentTarget.id);
        setCurrentWork(works[index]);
        setModalOpen(true);
    };

    const slideInOverlay = (event) => {
        const el = event.target.querySelector('.work__overlay');
        setOverlayClass([baseClass]); // Reset Classes
        const mousePosition = findMousePosition(event);
        if(!!el) {
            el.className = 'work__overlay';
            switch (mousePosition) {
                case 'right':
                    el.classList.add('overlay_from-left');
                    break;
                case 'left':
                    el.classList.add('overlay_from-right');
                    break;
                case 'under':
                    el.classList.add('overlay_from-top');
                    break;
                case 'above':
                    el.classList.add('overlay_from-bottom');
                    break;
            }
        }
    };

    const closeModal = () => { setModalOpen(false) };

    const [blinking, setBlinking] = useState({ borderWidth: '1px'});
    useEffect(() => {
        setInterval(() => {
            setBlinking(prev => {
                if(prev.borderWidth === '1px') {
                    return { borderWidth: '3px'};
                } else {
                    return { borderWidth: '1px'}
                }
            });
        }, 2000)
    }, []);

    const contribWorks = works.filter(work => work.type === 'contribution');
    const ownWorks = works.filter(work => work.type === 'own');

    return (
        <div className="page-container">
            <div className="works__title">
                <div className="works__title__main">
                    <h1 className="works__title__main__text">My Works</h1>
                    <a
                        className="works__title__main__link"
                        href="http://www.github.com/nancologist"
                        rel="noopener noreferrer"
                        style={blinking}
                        target="_blank"
                    >
                        <img src={githubLogo} alt="GitHub Logo"/>
                    </a>
                </div>
            </div>
            <div className="works">
                {ownWorks.map((work) => {
                    return (
                        <div
                            className="work"
                            key={work.title}
                            id={work.title}
                            onClick={handleClick}
                            onMouseEnter={slideInOverlay}
                            style={{ backgroundImage: `url(${work.thumbnail})` }}
                        >
                            <div className={overlayClass.join(' ')}>
                                <h3 className="overlay__title">{work.title}</h3>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="works__title">
                <h1>Contributions</h1>
            </div>
            <div className="works">
            {contribWorks.map((work) => {
                return (
                    <div
                        className="work"
                        key={work.title}
                        id={work.title}
                        onClick={handleClick}
                        onMouseEnter={slideInOverlay}
                        style={{ backgroundImage: `url(${work.thumbnail})` }}
                    >
                        <div className={overlayClass.join(' ')}>
                            <h3 className="overlay__title">{work.title}</h3>
                        </div>
                    </div>
                )
            })}
            </div>
            <AppModal
                handleClose={closeModal}
                open={modalOpen}
                project={currentWork}
            />
        </div>
    );
};

export default Works;