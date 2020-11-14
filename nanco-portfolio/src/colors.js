import {createMuiTheme} from "@material-ui/core";
import { green, orange } from '@material-ui/core/colors';

const colors = {
    primary: green[500],
    primaryDark: '#61892F',
    secondary: '#222629',
    secondaryLight: '#474B4F'
};

export default createMuiTheme({ palette: { colors } });
