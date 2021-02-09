import React, { useState } from "react";

import AppModal from "../../components/ui-components/AppModal/AppModal";
import { findMousePosition } from './utils';
import { works } from './data';
import './works.css';

const Works = () => {
    const [currentWork, setCurrentWork] = useState(works[0]);
    const [modalOpen, setModalOpen] = useState(false);

    const baseClass = 'work__overlay';
    const [overlayClass, setOverlayClass] = useState([baseClass]);

    const handleClick = (i) => {
        setCurrentWork(works[i]);
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
                    // el.classList.add('overlay_from-bottom');
                    break;
            }
        }
    };

    const closeModal = () => { setModalOpen(false) };

    return (
        <div className="works">
            {
                works.map((work, index) => {
                    return (
                        <div
                            className="work"
                            key={index}
                            onClick={handleClick.bind(this, index)}
                            onMouseEnter={slideInOverlay}
                            style={{ backgroundImage: `url(${work.thumbnail})` }}
                        >
                            <div className={overlayClass.join(' ')}>
                                <h3 className="overlay__title">{work.title}</h3>
                            </div>
                        </div>
                    )
                })
            }
            <AppModal
                handleClose={closeModal}
                open={modalOpen}
                project={currentWork}
            />
        </div>
    );
};

export default Works;