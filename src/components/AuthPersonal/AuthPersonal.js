import React, {useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import { personalRecommand } from '../../_actions/user_action';
import './AuthPersonal.css';

const AuthPersonal = () => {

    // personal 통신 했을때 유저정보에 퍼스널컬러 정보
    // 없으면 -> 진단페이지로
    // 있으면 -> 코디 추천정보 출력
    const [isExist, setIsExist] = useState(undefined);
    const [imageRoute, setImageRoute] = useState("");
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(personalRecommand())
        .then(res => {
            if (res.payload.message === "퍼스널 컬러 없습니다."){
                setIsExist(false);
            } else {
                setIsExist(true);
                setImageRoute(res.payload.image);
            }
        });
    }, []);

    return (
        <div>
            {
                isExist ?
                <div id='tpo-container'>
                    <span>오늘의 recommanded cody</span>
                    <div id='w-img-box'>
                        <img id='codi-box' alt='이미지 없음' src={imageRoute}/>
                    </div>
                </div>
                :
                <div id='no-personal-box'>
                    <p>퍼스널 컬러 정보가 없어요</p>
                    <p>퍼스널 컬러 진단을 해주세요 !</p>
                    <button>퍼스널컬러 <br/>진단받으러 가기</button>
                </div>
            }
        </div>
    );
};

export default AuthPersonal;