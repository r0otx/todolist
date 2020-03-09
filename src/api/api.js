import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        "API-KEY": "0c4347f8-5d25-4f91-a508-15a0777b08c3"
    }
});

export const todoAPI = {
    getTodo() {
        return instance.get(`todo-lists`);
    },
    postTodo(title) {
        return instance.post(`todo-lists`, {title});
    },
    delTodo(id) {
        return instance.delete(`todo-lists/${id}`)
    },
    renameTodo(id, name) {
        return instance.put(`todo-lists/${id}`, {title: name})
    }
};

export const authAPI = {
    login(email, password, rememberMe = false, captcha = false) {
        return instance.post(`/auth/login`, {email, password, rememberMe, captcha});
    },
    logout() {
        return instance.delete(`/auth/login`);
    },
    me() {
        return instance.get(`/auth/me`);
    },
    captcha() {
        return instance.get(`security/get-captcha-url`);
    }
};