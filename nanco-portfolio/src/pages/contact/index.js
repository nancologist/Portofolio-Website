import React from "react";
import {FormControl, InputLabel, FilledInput} from '@material-ui/core';
import './contact.css';

export default () => {
    return (
        <div className="page-container contact">
            <p className="contact__title">Let's get in touch!</p>
            <form className="contact__form">
                <FormControl fullWidth required variant='filled'>
                    <InputLabel
                        htmlFor="my-input"
                        classes={{
                            root: 'contact__form__label',
                            focused: 'contact__form__label--focused'
                        }}
                    >
                        Email address
                    </InputLabel>
                    <FilledInput
                        id="my-input"
                        className='contact__form__input'
                    />
                </FormControl>
            </form>
        </div>
    );
};