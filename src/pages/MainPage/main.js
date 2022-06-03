import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../../_actions/user_action';
import { useDispatch } from 'react-redux';

const MainPage = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    // 로그아웃 통신
    const onClickHandler = () => {

        dispatch(logoutUser())
            .then(response => {
                console.log(response)
                console.log(response.payload.success)
                if(response.payload.success){
                    // 로그아웃
                    navigate('/login');
                }
            })
    }


    return (
        <div>
            <div>main</div>
            <button onClick={onClickHandler}>log out</button>
        </div>
    );
};

export default MainPage;
