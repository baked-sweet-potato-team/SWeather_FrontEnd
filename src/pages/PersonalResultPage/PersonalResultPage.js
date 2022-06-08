import React, {useEffect, useRef, useState } from 'react';
import back from '../../assets/image/arrow_icon.jpg';
import { useNavigate, useLocation } from 'react-router-dom';
import './PersonalResultPage.css';
import { useDispatch } from 'react-redux';
import { personalResult } from '../../_actions/user_action';

const PersonalResultPage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const [ color , setColor] = useState();
    const [ explainImg, setExplainImg ] = useState();

    const onClickBack = () => { 
        navigate(-1);
    }

    const onClickMain = () => {
        navigate("/");
    } 

    // 첫 렌더링 시
    useEffect(() => {
        const { detail } = location.state;
        const { mypage } = location.state;

        if ( !mypage ) {
            let result = "";
            if (detail === "spring_light") result = "봄 웜 라이트";
            else if (detail === "spring_bright") result = "봄 웜 브라이트";
            else if (detail === "summer_mute") result = "여름 쿨 뮤트";
            else if (detail === "summer_light") result = "여름 쿨 라이트";
            else if (detail === "autumn_mute") result = "가을 웜 뮤트";
            else if (detail === "autumn_deep") result = "가을 웜 딥";
            else if (detail === "winter_bright") result = "겨울 쿨 브라이트";
            else if (detail === "winter_deep") result = "겨울 쿨 딥";
            setColor(result);
        } else { // mypage일 때 
            setColor(detail);
        } 
        
    }, []);

    //  color 값이 바뀔 때 (setColor가 발동한 후)
    useEffect(() => {
        let body = {
            color: color,
         };
        dispatch(personalResult(body))
        .then(res => res.payload.image)
        .then(res => {
            console.log(res);
            setExplainImg(res);
        });
    }, [color]);


    return (
        <div>
            <header id='personal-test-header'>
                <div onClick={onClickBack}><img src={back} /></div>
                <span>step 3. 결과 진단표</span>
            </header>
            <section id='personal-text'>
                <div id='personal-result-t' className='personal-t'>{color}</div>
            </section> 
            <section id='personal-explain'>
                <div className='personal-t'>{color}의 특징</div>
                <img src={explainImg} style={{width:"100%", marginBottom:"10px"}} alt='이미지 없음'/>
                <button onClick={onClickMain}>메인으로 돌아가기</button>
            </section>
        </div>
    );
};

export default PersonalResultPage;