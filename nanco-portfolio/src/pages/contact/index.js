import React from "react";
import {Button, FilledInput, FormControl, Icon, InputLabel} from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles";
import SendIcon from '@material-ui/icons/Send';
import './contact.css';

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));

export default () => {
    const classes = useStyles();
    return (
        <div className="page-container contact">
            <p className="contact__title">Let's get in touch!</p>
            <form
                className="contact__form"
                data-netlify="true"
                method='post'
                name="contact-form"
            >
                <input type="hidden" name="form-name" value="contact" />
                <FormControl fullWidth required variant='filled'>
                    <InputLabel
                        htmlFor="name"
                        classes={{
                            root: 'contact__form__label',
                            focused: 'contact__form__label--focused'
                        }}
                    >
                        Your name
                    </InputLabel>
                    <FilledInput
                        className='contact__form__input'
                        id="name"
                        type="text"
                    />
                </FormControl>
                <FormControl fullWidth required variant='filled'>
                    <InputLabel
                        htmlFor="email"
                        classes={{
                            root: 'contact__form__label',
                            focused: 'contact__form__label--focused'
                        }}
                    >
                        Email address
                    </InputLabel>
                    <FilledInput
                        className='contact__form__input'
                        id="email"
                        type="email"
                    />
                </FormControl>
                <FormControl fullWidth required variant='filled'>
                    <InputLabel
                        htmlFor="message"
                        classes={{
                            root: 'contact__form__label',
                            focused: 'contact__form__label--focused'
                        }}
                    >
                        Message
                    </InputLabel>
                    <FilledInput
                        className='contact__form__input'
                        id="message"
                        type="text"
                        multiline="true"
                        rows={10}
                    />
                </FormControl>
                <Button
                    color="primary"
                    className={classes.button}
                    endIcon={<SendIcon/>}
                    type='submit'
                    variant="outlined"
                >
                    Send
                </Button>
            </form>
        </div>
    );
};