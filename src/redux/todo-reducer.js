import {todoAPI} from "../api/api";

let GET_TODO = "GET_TODO";
let ADD_TODO = "ADD_TODO";
let DEL_TODO = "DEL_TODO";
let RENAME_TODO = "RENAME_TODO";

let GET_TASK = "GET_TASK";
let ADD_TASK = "ADD_TASK";
let DEL_TASK = "DEL_TASK";
let RENAME_TASK = "RENAME_TASK";

let initialState = {
    todoItem: [],
    todoTask: []
};

let todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TODO:
            return {
                ...state,
                todoItem: action.value
            };
        case GET_TASK:
            return {
                ...state,
                todoTask: action.value
            };
        case ADD_TASK:
            let addTask = {
                id: state.todoTask.length + 1,
                title: action.value,
                description: null,
                completed: null,
                status: null,
                priority: null,
                startDate: null,
                deadline: null,
                todoListId: action.id,
                order: null,
                addedDate: null
            };
            return {
                ...state,
                todoTask: [addTask, ...state.todoTask]
            };
        case ADD_TODO:
            let addTodoPart = {
                id: action.value.length + 1,
                title: action.value,
                addedDate: Date.now,
                order: 1
            };
            return {
                ...state,
                todoItem: [addTodoPart, ...state.todoItem]
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
                todoItem: state.todoItem.map(item => item.id !== action.id ? item: {...item, title: action.name} )
            };
        default:
            return state;
    }
};

//Action Creators

export const getTodo = (value) => {
    return {
        type: GET_TODO, value
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

export const getTask = (value) => {
    return {
        type: GET_TASK, value
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
        dispatch(getTodo(response.data));
    }
};

export const addTodoPart = (title) => async (dispatch) => {
    todoAPI.postTodo(title);
    dispatch(addTodo(title));
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
        dispatch(getTask(response.data.items));
    }
};

export const addTodoTask = (id, title) => async (dispatch) => {
    await todoAPI.postTask(id, title);
    dispatch(addTask(title));
};

export default todoReducer;