import React from "react";
import {connect} from "react-redux";
import {addTodoTask} from "../../../redux/todo-reducer";
import TodoTaskInput from "./TodoTaskInput";


const TodoTaskItemContainer = (props) => {
    return <TodoTaskInput {...props} />
};

export default connect(null, {addTodoTask})(TodoTaskItemContainer);