import React, { useState } from "react";

import AppModal from "../../components/ui-components/AppModal/AppModal";
import { findMousePosition } from './utils';
import { works } from './data';
import './works.css';

const Works = () => {
    const [currentProject, setCurrentProject] = useState(works[0]);
    const [modalOpen, setModalOpen] = useState(false);

    const baseClass = 'project__overlay';
    const [overlayClass, setOverlayClass] = useState([baseClass]);

    const handleClick = (i) => {
        setCurrentProject(works[i]);
        setModalOpen(true);
    };

    const slideInOverlay = (event) => {
        const el = event.target.querySelector('.project__overlay');
        setOverlayClass([baseClass]); // Reset Classes
        const mousePosition = findMousePosition(event);
        if(!!el) {
            el.className = 'project__overlay';
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
                    // el.classList.add('overlay_from-bottom');
                    break;
            }
        }
    };

    const closeModal = () => { setModalOpen(false) };

    return (
        <div className="works">
            {
                works.map((project, index) => {
                    return (
                        <div
                            className="project"
                            key={index}
                            onClick={handleClick.bind(this, index)}
                            onMouseEnter={slideInOverlay}
                            style={{ backgroundImage: `url(${project.thumbnail})` }}
                        >
                            <div className={overlayClass.join(' ')}>
                                <h3 className="overlay__title">{project.title}</h3>
                            </div>
                        </div>
                    )
                })
            }
            <AppModal
                handleClose={closeModal}
                open={modalOpen}
                project={currentProject}
            />
        </div>
    );
};

export default Works;