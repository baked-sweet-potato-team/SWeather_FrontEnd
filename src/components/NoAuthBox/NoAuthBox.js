import React from 'react';
import {useNavigate} from "react-router-dom";
import './NoAuthBox.css';

const NoAuthBox = () => {

    const navigate = useNavigate();

    const onClickHandler = () => {
        navigate('/login');
    }

    return (
        <div className='notAuthBox'>
                <p className='notAuthText'>로그인 후 이용해주세요</p>
                <button className='login-btn' onClick={onClickHandler}>login</button>
        </div> 
    );
};

export default NoAuthBox;