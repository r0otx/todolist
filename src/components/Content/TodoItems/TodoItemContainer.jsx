import React from "react";
import {connect} from "react-redux";
import TodoItems from "./TodoItem";
import {delTodoPart, delTodoTask, getTodoPart, getTodoTasks, renameTodoPart} from "../../../redux/todo-reducer";

const TodoItemsContainer = (props) => {
    return (<TodoItems {...props}/>);
};

let mapStateToProps = (state) => ({
    todoItem: state.todoItem,
    todoTask: state.todoItem.todoTask
});



export default connect(mapStateToProps, {delTodoPart, getTodoPart, renameTodoPart, getTodoTasks, delTodoTask})(TodoItemsContainer);