import React, {useState} from "react";

import {Snackbar} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";

import './about.css';
import data from '../../components/pages/about/data';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default (props) => {
    const [msgOpen, setMsgOpen] = useState(false);

    if (props.location.state) {
        if (props.location.state.open) {
            setMsgOpen(true);
            props.location.state.open = false;
        }
    }

    const closeMsg = () => {
        setMsgOpen(false);
    };

    return (
        <div className="page-container about">
            <div className="section-bio">
                <div className="about-pic-container">
                    <div className="about-pic"/>
                </div>
                {/* <AppTimeline /> */}
                <div className="bio__content__text">
                    <h1 className="bio__content__title">Profile</h1>
                    { data.profile.split('<br>').map(text => <p className="bio__content__text">{text}</p>)}
                </div>
            </div>
            <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right'}}
                autoHideDuration={5000}
                open={msgOpen}
                onClose={closeMsg}
            >
                <Alert severity="success">
                    Your message successfully sent!
                </Alert>
            </Snackbar>
        </div>
    );
};
