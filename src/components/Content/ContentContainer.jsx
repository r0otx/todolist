import React, {useEffect} from "react";
import {connect} from "react-redux";
import Content from "./Content";
import {getAuthUserData} from "../../redux/auth-reducer";

const ContentContainer = ({getAuthUserData, ...props}) => {

    useEffect(() => {
        getAuthUserData();
    }, [getAuthUserData])

    return <Content isAuth={props.isAuth} />
};

let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {getAuthUserData})(ContentContainer);