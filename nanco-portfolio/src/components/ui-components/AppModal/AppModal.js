import React, {useEffect, useState} from "react";
import "./AppModal.css";

import Modal from "@material-ui/core/Modal";
import Fade from "@material-ui/core/Fade";

import CancelIcon from "@material-ui/icons/Cancel";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import AssignmentIcon from "@material-ui/icons/Assignment";
import BuildIcon from "@material-ui/icons/Build";

const AppModal = (props) => {
    const { project, open, handleClose } = props;
    return (
        <Modal
            aria-describedby="modal-description"
            aria-labelledby="modal-title"
            className="modal"
            onClose={handleClose}
            open={open}
        >
            <Fade
                className="modal__content"
                in={open}
            >
                <div>
                    <div className="modal__feature modal__title" id="modal-title">
                        <div className="modal__title__customer-logo">
                            <img
                                src={project.customer.logo}
                                alt={"Logo of Customer " + project.customer.name}
                            />
                        </div>
                        <h2>{project.title}</h2>
                    </div>
                    <div className="modal__close-btn" onClick={handleClose}>
                        <CancelIcon />
                    </div>
                    <div id="modal-description">
                        <div className="modal__feature modal__date">
                            <CalendarTodayIcon className="modal__feature__icon" fontSize="large"/>
                            <span className="modal__date--text">{project.date}</span>
                        </div>
                        <div className="modal__feature project__tasks">
                            <AssignmentIcon className="modal__feature__icon" fontSize="large"/>
                            <ul className="modal__tasks--list">{
                                project.tasks.map((task, i) => {
                                    return <li className="modal__tasks--list-item" key={task + i}>{task}</li>
                                })
                            }</ul>
                        </div>
                        <div className="modal__feature project__tools">
                            <div className="modal__tools--icon">
                                <BuildIcon className="modal__feature__icon" fontSize="large"/>
                            </div>
                            <div>{
                                project.tools.map(
                                    (brand, i) =>
                                    {
                                        return (
                                            <div key={brand.alt + i} className="modal__tools--img-wrapper">
                                                <img src={brand.src} alt={brand.alt}/>
                                            </div>
                                        )
                                    }
                                )
                            }</div>
                        </div>
                        {!!project.repo ? 
                            <a href={project.repo} className="repo-link">
                                <strong>Check out the source code!</strong>
                            </a>
                        : null}
                    </div>
                </div>
            </Fade>
        </Modal>
    );
};

export default AppModal;
