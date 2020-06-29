import React from "react";

import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import {Fab} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles'

import colors from "../../colors";

const useStyles = makeStyles({
    root: {
        backgroundColor: colors.primaryDark,
        '&:hover': {
            backgroundColor: colors.primary,
        }
    }
});

export default () => {
    const classes = useStyles();
    return (
        <Fab
            className={classes.root}
            href='#projects'
        >
            <ArrowDropDownIcon
                fontSize='large'
            />
        </Fab>
    );
};