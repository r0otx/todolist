import React from "react";
import {connect} from "react-redux";
import TodoTaskItem from "./TodoTaskItem";
import {delTodoTask, getTodoTasks} from "../../../redux/todo-reducer";


const TodoTaskItemContainer = (props) => {

    return <TodoTaskItem {...props} />
};

let mapStateToProps = (state) => ({
    todoTask: state.todoItem.todoTask
});

export default connect(mapStateToProps, {getTodoTasks, delTodoTask})(TodoTaskItemContainer);