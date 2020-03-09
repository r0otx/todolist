import React from "react";
import {connect} from "react-redux";
import Navbar from "./Navbar";
import {logout} from "../../redux/auth-reducer";

const NavbarContainer = (props) => {
    return <Navbar login={props.login} logout={props.logout} />
};

let mapStateToProps = (state) => ({
    login: state.auth.login
});

export default connect(mapStateToProps, {logout})(NavbarContainer);