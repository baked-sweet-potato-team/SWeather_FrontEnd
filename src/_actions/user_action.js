import axios from 'axios'
import {
    LOGIN_USER,
    LOGOUT_USER,
    SIGNUP_USER,
    AUTH_USER, 
    WEATHER_MAIN,
    TPO_MAIN,
    PERSONAL_MAIN, 
    MY_USER
} from './types' 

// action 정의

// loginUser
export function loginUser(dataTosubmit) {
     
    const request = axios.post('/api/users/login', dataTosubmit)
    .then(response => response.data)

    // reducer로 보내기 (이전 + action -> 다음 state 갱신)
    return {
        type: LOGIN_USER,
        payload: request
    }
}

// loginUser
export function logoutUser() {
     
    const request = axios.get('/api/users/logout')
    .then(response => response.data)

    return {
        type: LOGOUT_USER,
        payload: request
    }
}

// signupUser
export function signupUser(dataTosubmit) {
     
    const request = axios.post('/api/users/register', dataTosubmit)
    .then(response => response.data)

    return {
        type: SIGNUP_USER,
        payload: request
    }
}

// auth
export function auth() {
     
    const request = axios.get('/api/users/auth')
    .then(response => response.data)

    return {
        type: AUTH_USER,
        payload: request
    }
}

// weather recommand
export function weatherRecommand(dataTosubmit) {
     
    const request = axios.post('/api/main/weather', dataTosubmit)
    .then(response => response.data)

    return {
        type: WEATHER_MAIN,
        payload: request
    }
}

// tpo recommand
export function tpoRecommand(dataTosubmit) {
     
    const request = axios.post('/api/main/tpo', dataTosubmit)
    .then(response => response.data)

    return {
        type: TPO_MAIN,
        payload: request
    }
}

// personal recommand 
export function personalRecommand() {
     
    const request = axios.get('/api/main/personal')
    .then(response => response.data)

    return {
        type: PERSONAL_MAIN,
        payload: request
    }
}

// user search
export function searchUser() {
     
    const request = axios.get('/api/my')
    .then(response => response.data)

    return {
        type: MY_USER,
        payload: request
    }
}