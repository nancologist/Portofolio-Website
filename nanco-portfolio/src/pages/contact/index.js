import React, { Component } from "react";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import {Button, Snackbar} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import MuiAlert from '@material-ui/lab/Alert';

import AppFormCtrl from '../../components/formControl';
import './contact.css';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default class Contact extends Component {
    state = {
        btnClass: 'disabled',
        successMsgShown: false
    };

    handleCaptchaSuccess = (value) => {
        if (!!value) {
            this.setState({
                btnClass: 'active',
                // captchaValue: value
            });
        }
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const data = new FormData(form);
        axios.post('', data).then(() => {
            this.setState({successMsgShown: true});
        })
    };

    hideSuccessMsg = () => {
        this.setState({successMsgShown: false});
    };

    render() {
        return (
            <div className="page-container contact">
                <p className="contact__title">Get in touch</p>
                <form
                    className="contact__form"
                    data-netlify="true"
                    data-netlify-recaptcha="true"
                    method='post'
                    name="portfoliocontact"
                    onSubmit={this.handleSubmit}
                    // netlify-honeypot="bot-field" DOES NOT WORK... :(
                >
                    <input type="hidden" name="form-name" value="portfoliocontact" />
                    {/*<input name="bot-field" /> */}
                    <AppFormCtrl name='name' required text='Your name' type='text'/>
                    <AppFormCtrl name='phone-number' text='Phone number' type='text'/>
                    <AppFormCtrl name='email' required text='Email address' type='email'/>
                    <AppFormCtrl name='message' required text='Message' textarea={{ multiline: true, rows: 7 }} type='email'/>
                    <div className="contact__form__submit-wrapper">
                        <ReCAPTCHA
                            className={'contact-form__recaptcha'}
                            onChange={this.handleCaptchaSuccess}
                            // sitekey= {SITE_RECAPTCHA_KEY}
                            sitekey="6Lc3Xr8ZAAAAADxKp6zv61rgrJPSHzNWhMc3YJIS"
                            theme="dark"
                        />
                        <Button
                            className={`
                                contact__form__submit-button 
                                contact__form__submit-button--${this.state.btnClass}
                            `}
                            disabled={this.state.btnClass === 'disabled'}
                            endIcon={<SendIcon/>}
                            size='large'
                            type='submit'
                            variant="outlined"
                        >
                            Send
                        </Button>
                    </div>
                </form>
                <Snackbar
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right'}}
                    autoHideDuration={5000}
                    open={this.state.successMsgShown}
                    onClose={this.hideSuccessMsg}
                >
                    <Alert severity="success">
                        Your message successfully sent!
                    </Alert>
                </Snackbar>
            </div>
        );
    }
};

// 6Lc5Xb8ZAAAAAM4jbxaQqB_xGI0IpebgvFhMeReP
