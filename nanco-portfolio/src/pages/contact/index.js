import React, { Component } from "react";
import { navigate } from "gatsby"
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import {Button, Snackbar} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import MuiAlert from '@material-ui/lab/Alert';

import AppFormCtrl from '../../components/AppFormControl';
import './contact.css';

export default class Contact extends Component {
    state = {
        btnClass: 'disabled',
        validRecap: false,
        successMsgShown: false,
        form: {
            name: '',
            phone: '',
            email: '',
            msg: ''
        }
    };

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        const submitBtnIsToggled = nextState.btnClass !== this.state.btnClass;
        return !submitBtnIsToggled;

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const btnEnabled = !!prevState.form.name
            && !!prevState.form.email
            && !!prevState.form.msg
            && prevState.validRecap
            && prevState.btnClass !== 'active';
        if (btnEnabled) this.setState({ btnClass: 'active' });
    }

    handleCaptchaSuccess = (value) => {
        if (!!value) {
            this.setState({ validRecap: true });
        }
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const data = new FormData(form);
        axios.post('', data).then(() => {
            this.setState({successMsgShown: true});
        });
        navigate(
            '/about',
            {
                state: {
                    msg: 'show the damn msg!',
                    open: true
                }
            }
        );
    };

    handleInputChange = (event) => {
        const { id, value} = event.currentTarget;
        this.setState({
            form: {
                ...this.state.form,
                [id]: value
            }
        });
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
                    <AppFormCtrl
                        changed={this.handleInputChange}
                        name='name'
                        required
                        text='Your name'
                        type='text'
                        value={this.state.form.name}
                    />
                    <AppFormCtrl
                        changed={this.handleInputChange}
                        name='phone'
                        text='Phone number'
                        type='tel'
                        value={this.state.form.phone}
                    />
                    <AppFormCtrl
                        changed={this.handleInputChange}
                        name='email'
                        required
                        text='Email address'
                        type='email'
                        value={this.state.form.email}
                    />
                    <AppFormCtrl
                        changed={this.handleInputChange}
                        name='msg'
                        required text='Message'
                        textarea={{ multiline: true, rows: 7 }}
                        type='text'
                        value={this.state.form.msg}
                    />
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
                            disabled={
                                !this.state.form.name
                                || !this.state.form.email
                                || !this.state.validRecap
                            }
                            endIcon={<SendIcon/>}
                            size='large'
                            type='submit'
                            variant="outlined"
                        >
                            Send
                        </Button>
                    </div>
                </form>
            </div>
        );
    }
};

// Google Recaptcha Sitekey: 6Lc5Xb8ZAAAAAM4jbxaQqB_xGI0IpebgvFhMeReP
