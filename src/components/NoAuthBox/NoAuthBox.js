import React from 'react';
import {useNavigate} from "react-router-dom";
import './NoAuthBox.css';

const NoAuthBox = () => {

    const navigate = useNavigate();

    const onClickHandler = () => {
        navigate('/login');
    }

    return (
        <div className='noAuthBox'>
                <p className='noAuthText'>로그인 후 이용해주세요</p>
                <button className='login-btn' onClick={onClickHandler}>로그인 하러가기</button>
        </div> 
    );
};

export default NoAuthBox;