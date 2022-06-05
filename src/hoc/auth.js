import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { auth } from '../_actions/user_action';

// SpecificComponent : 페이지나 컴포넌트
// option : null(아무나 출입 가능) / true(로그인 한 사람만) / false(로그인 유저 출입 불가)
export default function (SpecificComponent, option, adminRoute = null) {
    
    // 로그인 한 유저인지 확인하는 함수
    function AuthenticationCheck(props) {
        // redux dispatch
        const dispatch = useDispatch();
        const navigate = useNavigate();
        // backend에 상태를 request해서
        // 현재 user의 상태 확인
        useEffect(() => {
            // redux 사용
            dispatch(auth())
            .then(response => {
                if(!response.payload.isAuth) {
                    // 로그인 하지 않은 상태
                    // 에서 로그인 한 사람만 들어갈 수 있는 페이지는 
                    if (option == true){
                        // 로그인 페이지로 이동
                        alert('로그인을 하지 않았습니다.');
                        navigate(-1);
                    }
                } else {
                    // 로그인 한 상태
                    if (option == false){
                        // 로그인 페이지로 이동
                        alert('이미 로그인 된 상태입니다.');
                        navigate(-1);
                    }
                }
                
            }) // response에 있는 정보들은 backend에서 가져온 user정보         
        }, [])

        return(
            <SpecificComponent/>
        )
    }



    return AuthenticationCheck
}