import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { auth } from '../../_actions/user_action';
import NoAuthMyPage from '../../components/NoAuthMyPage/NoAuthMyPage';
import AuthMyPage from '../../components/AuthMyPage/AuthMyPage';
import './MyPage.css';

function MyPage() {

    const dispatch = useDispatch();
    const [isAuth, setIsAuth] = useState("");

    useEffect(() => {
        dispatch(auth())
        .then(response => {
            if(response.payload.isAuth) {
                setIsAuth(true);
            } else {
                // 회원이 아닌 경우
                setIsAuth(false);
            }
        })
    },[])

    return (
        <div className='container'>{ isAuth ? <AuthMyPage/> : <NoAuthMyPage/>}</div>
    );
};

export default MyPage;