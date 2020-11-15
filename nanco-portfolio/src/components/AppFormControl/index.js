import React from "react";
import {FilledInput, FormControl, InputLabel} from "@material-ui/core";
import './index.css';

export default (props) => (
    <FormControl fullWidth required={!!props.required} variant='filled'>
        <InputLabel
            htmlFor={props.name}
            classes={{
                root: 'contact__form__label',
                focused: 'contact__form__label--focused'
            }}
        >
            {props.text}
        </InputLabel>
        <FilledInput
            className='contact__form__input'
            id={props.name}
            name={props.name}
            type={props.type}
            {...props.textarea}
        />
    </FormControl>
)
