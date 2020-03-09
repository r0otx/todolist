import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import LockIcon from '@material-ui/icons/Lock';
import {connect} from "react-redux";
import Auth from "./Auth";
import {login} from "../../../redux/auth-reducer";

const AuthContainer = (props) => {
    return <Auth login={props.login}/>
};

export default connect(null, {login})(AuthContainer);