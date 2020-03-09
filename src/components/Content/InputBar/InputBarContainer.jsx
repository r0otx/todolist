import React from "react";
import {connect} from "react-redux";
import {addTodoPart} from "../../../redux/todo-reducer";
import InputBar from "./InputBar";

const InputBarContainer = (props) => {
    return <InputBar {...props}/>
};

export default connect(null, {addTodoPart})(InputBarContainer);