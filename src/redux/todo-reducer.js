import {todoAPI} from "../api/api";

let ADD_TODO = "ADD_TODO";
let DEL_TODO = "DEL_TODO";
let GET_TODO = "GET_TODO";
let RENAME_TODO = "RENAME_TODO";

let initialState = {
    todoItem: []
};

let todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TODO:
            return {
                ...state,
                todoItem: action.value
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

export const renameTodo = (id, name) => {
    return {
        type: RENAME_TODO, id, name
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

export const renameTodoPart = (id, name) => async (dispatch) => {
    todoAPI.renameTodo(id, name);
    dispatch(renameTodo(id, name));
};

export default todoReducer;