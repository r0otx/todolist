import {todoAPI} from "../api/api";

let SET_TODO = "SET_TODO";
let ADD_TODO = "ADD_TODO";
let DEL_TODO = "DEL_TODO";
let RENAME_TODO = "RENAME_TODO";

let SET_TASK = "SET_TASK";
let ADD_TASK = "ADD_TASK";
let DEL_TASK = "DEL_TASK";

let initialState = {
    todoItem: [],
    todoTask: []
};

let todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TODO:
            return {
                ...state,
                todoItem: action.value
            };
        case SET_TASK:
            return {
                ...state,
                todoTask: [...state.todoTask, ...action.data],

            };
        case ADD_TASK:
            return {
                ...state,
                todoTask: [action.value, ...state.todoTask]
            };
        case ADD_TODO:
            return {
                ...state,
                todoItem: [action.value.data.item, ...state.todoItem]
            };
        case DEL_TODO:
            return {
                ...state,
                todoItem: state.todoItem.filter(item => item.id !== action.id)
            };
        case DEL_TASK:
            return {
                ...state,
                todoTask: state.todoTask.filter(item => item.id !== action.taskId)
            };
        case RENAME_TODO:
            return {
                ...state,
                todoItem: state.todoItem.map(item => item.id !== action.id ? item: {...item, title: action.name} )
            };
        default:
            return state;
    }
};

//Action Creators

export const setTodo = (value) => {
    return {
        type: SET_TODO, value
    }
};

export const addTodo = (value) => {
    return {
        type: ADD_TODO, value
    }
};

export const delTodo = (id) => {
    return {
        type: DEL_TODO, id
    }
};

export const delTask = (taskId) => {
    return {
        type: DEL_TASK, taskId
    }
};

export const renameTodo = (id, name) => {
    return {
        type: RENAME_TODO, id, name
    }
};

export const setTask = (tasklistid, data) => {
    return {
        type: SET_TASK, tasklistid, data
    }
};

export const addTask = (value) => {
    return {
        type: ADD_TASK, value
    }
};

//Thunks
export const getTodoPart = () => async (dispatch) => {
    let response = await todoAPI.getTodo();
    if (response.status === 200) {
        dispatch(setTodo(response.data));
    }
};

export const addTodoPart = (title) => async (dispatch) => {
    let response = await todoAPI.postTodo(title);
    dispatch(addTodo(response.data));
};

export const delTodoPart = (id) => async (dispatch) => {
    todoAPI.delTodo(id);
    dispatch(delTodo(id));
};

export const delTodoTask = (listId, taskId) => async (dispatch) => {
    todoAPI.delTask(listId, taskId);
    dispatch(delTask(taskId));
};

export const renameTodoPart = (id, name) => async (dispatch) => {
    todoAPI.renameTodo(id, name);
    dispatch(renameTodo(id, name));
};

export const getTodoTasks = (tasklistid) => async (dispatch) => {
    let response = await todoAPI.getTasks(tasklistid);
    if (response.status === 200) {
        dispatch(setTask(tasklistid, response.data.items));
    }
};

export const addTodoTask = (id, title) => async (dispatch) => {
    let response = await todoAPI.postTask(id, title);
    dispatch(addTask(response.data.data.item));
};

export default todoReducer;