import React from "react";
import {connect} from "react-redux";
import Auth from "./Auth";
import {login} from "../../../redux/auth-reducer";

const AuthContainer = (props) => {
    return <Auth login={props.login}/>
};

export default connect(null, {login})(AuthContainer);