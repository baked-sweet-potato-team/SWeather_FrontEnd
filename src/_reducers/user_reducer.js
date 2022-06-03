import {
    LOGIN_USER, 
    LOGOUT_USER,
    SIGNUP_USER,
    AUTH_USER,
    WEATHER_MAIN,
    TPO_MAIN,
    PERSONAL_MAIN,
    MY_USER
}  from '../_actions/types'

// reducer 정의 
export default function (state ={}, action) {
    // action 타입 별로 구분하기 위해 
    //console.log("action 출력 : ", action, action.type, action.payload)
    
    switch(action.type) {
        case LOGIN_USER:
            // next state를 return하는 역할
            // action.payload : 백엔드에서 가져온 정보
            return {...state, loginSuccess: action.payload}
        case LOGOUT_USER:
            return {...state, logoutSuccess: action.payload}
        case SIGNUP_USER:
            return {...state, signupSuccess: action.payload}
        case AUTH_USER:
            // 모든 user의 정보를 return 받음
            return {...state, userData: action.payload}
        case WEATHER_MAIN:
            return {...state, recommandData: action.payload}
        case TPO_MAIN:
            return {...state, recommandData: action.payload}
        case PERSONAL_MAIN:
            return {...state, recommandData: action.payload}
        case MY_USER:
            return {...state,uuserInfo: action.payload}
        default:
            return state;
    }
}