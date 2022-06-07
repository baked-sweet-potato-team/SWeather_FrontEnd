import React, {useEffect, useState} from 'react';
import './AuthMyPage.css'
import {useNavigate, Link} from 'react-router-dom';
import Header from '../../components/Header/Header';
import { useDispatch } from 'react-redux';
import { logoutUser, searchUser, personalResult } from '../../_actions/user_action';

const AuthMyPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [Nickname, setNickname] = useState("")
    const [Gender, setGender] = useState("")
    const [Age, setAge] = useState("")
    const [Style, setStyle] = useState("")
    const [Color, setColor] = useState("")

    useEffect(() => {
        dispatch(searchUser())
        .then(response => {
            console.log("userinfo",response);
            setAge(response.payload[0].age);
            setNickname(response.payload[0].nickname);
            setGender(response.payload[0].gender);
            setStyle(response.payload[0].style);
            setColor(response.payload[0].color);
            }
        )
    },[])

    // 진단표 보러가기 통신
    const onClickResult = () => {
        navigate("/personalResult", {
            state: {
              detail: Color,
              mypage: true
            },
          });
    }
    

    //로그아웃 통신
    const onClickLogoutHandler = () => {

        dispatch(logoutUser())
            .then(response => {
                console.log(response)
                console.log(response.payload.success)
                if(response.payload.success){
                    // 로그아웃 성공
                    navigate('/login');
                }
            })
    }

    const onClickMainHandler = () => {
        navigate('/');
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
                        {Nickname}&nbsp;&nbsp;님 안녕하세요 !
                    </div>
                </div>
            </div>
            <div className='n-box'>
                <div className='my-n-box'>
                    <div className='info-top-box'>
                        <div className='info-text'>Age <br/><br/> {Age}</div>
                        <div className='info-text'>Style <br/><br/> {Style}</div>
                        <div className='info-text'>Gender <br/><br/> {Gender}</div>
                    </div>
                    <div style={{margin: "10px"}}>퍼스널 컬러 진단표</div>
                    <div className='personal-info-box'>
                        <div className='personal-info-text'>{Color}</div>
                        <button onClick={onClickResult} id='btn-personal'>진단 결과 보러가기</button>
                    </div>
                    <div className='btn-box'>
                        <button className='btn-my' onClick={onClickLogoutHandler}>로그아웃</button>
                    </div>
                    <div className='btn-box'>
                        <button className='btn-my' onClick={onClickMainHandler}>메인화면</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthMyPage;