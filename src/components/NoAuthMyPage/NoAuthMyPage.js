import React from 'react';
import './NoAuthMyPage.css'
import {useNavigate, Link} from 'react-router-dom';
import Header from '../../components/Header/Header';

const NoAuthMyPage = () => {
    const navigate = useNavigate();

    function onClickLogin() {
        navigate('/login');
    }

    function onClickRegister() {
        navigate('/register');
    }

    return (
        <div className='my-container'>
            <div className='back-box-1'>
                <div className='top-btn'>
                    <Link to="/">
                        <div className='btn-img'>이미지</div>
                    </Link>
                    <div className='top-header'>
                        <Header/>
                    </div>
                    <div className='profile-text'>
                        로그인을 해 주세요 !
                    </div>
                </div>
            </div>
            <div className='n-box'>
                <div className='n-box-1'>
                    <p className='n-main-text'>로그인 후 더 많은</p>
                    <p className='n-main-text'>혜택을 누리실 수 있어요 !</p>
                </div>
                <div className='n-box-2'>
                    <button className='n-btn' onClick={onClickLogin}>로그인</button>
                    <button className='n-btn' onClick={onClickRegister}>회원가입</button>
                </div>
            </div>
        </div>
    );
};

export default NoAuthMyPage;