import React from "react";
import {FormControl, InputLabel, Input} from '@material-ui/core';
import './contact.css';

export default () => {
    return (
        <div className="page-container contact">
            <h1 className="contact__title">Contact Me</h1>
            <FormControl className="contact__form">
                <div>
                    <InputLabel
                        htmlFor="my-input"
                        classes={{
                            root: 'contact__form__label',
                            focused: 'contact__form__label--focused'
                        }}
                    >
                        Email address
                    </InputLabel>
                    <Input
                        id="my-input"
                        classes={{
                            root: 'contact__form__input'
                        }}
                    />
                </div>
            </FormControl>
        </div>
    );
};