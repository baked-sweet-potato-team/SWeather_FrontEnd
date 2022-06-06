import React from 'react';
import './PersonalColorPage.css';
import Header from '../../components/Header/Header';
import { useNavigate } from 'react-router-dom';

const PersonalColorPage = () => {

    const navigate = useNavigate();
    const onPersonalTestHandler = () => {
        navigate("/personalTest1");
    }

    return (
        <div>
            <Header/>
            <section id='personal-container'> 
                <div id='personal-title-top'>퍼스널 컬러 진단 방법</div>
                <article className='personal-box'>
                    <div className='personal-title'>Step 1. 나의 계절 타입 진단</div>
                    <span>내 얼굴에 잘 맞는 색상 5개를 <br/>❤️를 눌러 골라주세요</span>
                </article>
                <article className='personal-box'>
                    <div className='personal-title'>Step 2. 나의 세부톤 진단</div>
                    <span>더 정밀한 색상진단 단계 !<br/>내 얼굴에 잘맞는 색상 5개를 <br/> ❤️를 눌러 골라주세요</span>
                </article>
                <article className='personal-box'>
                    <div className='personal-title'>Step 3. 결과 리포트</div>
                    <span>당신의 퍼스널 컬러 결과를 <br/>알려드려요.<br/>Tips & Guide도 확인해 보세요.</span>
                </article>
                <button id='personal-test-btn' onClick={onPersonalTestHandler}>스스로 진단하기</button>
            </section>
        </div>
    );
};

export default PersonalColorPage;