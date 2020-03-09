import React from "react";
import {connect} from "react-redux";
import TodoItems from "./TodoItem";
import {delTodoPart, getTodoPart, renameTodoPart} from "../../../redux/todo-reducer";

const TodoItemsContainer = (props) => {
    return (<TodoItems {...props}/>);
};

let mapStateToProps = (state) => ({
    todoItem: state.todoItem
});



export default connect(mapStateToProps, {delTodoPart, getTodoPart, renameTodoPart})(TodoItemsContainer);