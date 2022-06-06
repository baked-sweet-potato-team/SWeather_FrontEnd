import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import MyHeader from '../../components/Header/Header'
import './RegisterPage.css'

import {useDispatch} from 'react-redux'
import {signupUser} from '../../_actions/user_action'

function RegisterPage() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordChk, setPasswordChk] = useState("");
    const [nickname, setNickname] = useState("");
    const [gender, setGender] = useState("");
    const [age, setAge] = useState("");
    const [style, setStyle] = useState("");

    // handler
     const onEmailHandler = (e) => {
        setEmail(e.currentTarget.value)
    }

    const onPasswordHandler = (e) => {
        setPassword(e.currentTarget.value)
    }
;
    const onPasswordCheckHandler = (e) => {
        setPasswordChk(e.currentTarget.value)
    }

    const onNicknameHandler = (e) => {
        setNickname(e.currentTarget.value)
    }

    const onGenderHandler = (e) => {
        setGender(e.currentTarget.value)
    }

    const onAgeHandler = (e) => {
        setAge(e.currentTarget.value)
    }

    const onStyleHandler = (e) => {
        setStyle(e.currentTarget.value)
    }

    const onSignupSubmitHandler = (e) => {
        e.preventDefault()

        // 비번 일치 확인
        if(password !== passwordChk){
            return alert('비밀번호와 비밀번호 확인이 일치하지 않습니다.')
        }

         // 보낼 데이터
        let body = { 
            email: email,
            password: password,
            nickname: nickname,
            gender: gender,
            age: age,
            style: style
        }
        console.log(body)
        // dispatch를 이용해서 signupUser라는 action 취하기
        // 여기서 response는 action을 통해 받은 type과 payload
        dispatch(signupUser(body))
        .then(response => {
            console.log("회원가입",response);
            if(response.payload.success) {
                // 회원가입 성공 시 로그인 화면 전환 
                navigate("/login");
            }
            else {
                // 회원가입 실패 시 오류 출력
                alert(response.payload.message)
            }
        })
    }


    return (
        <div>
            <div className='r-container'>
                <div className='r-main-box'>
                    <section className='header'>
                        <MyHeader/>
                    </section>
                    <section className='r-main'>
                        <div className='signup-box'>
                            <div className='signup-text-box'>
                                <p className='signup-text'>Sign up</p>
                            </div>
                            <form className='r-input-group' onSubmit={onSignupSubmitHandler}>
                                <div className='r-input-group-box'>
                                    <label className='r-text'>이메일</label>
                                    <div className='r-input-box'>
                                        <input className='r-inputs' type="email" placeholder=" 이메일을 입력하세요" 
                                        value={email} onChange={onEmailHandler}/>
                                    </div>
                                    <label className='r-text'>비밀번호</label>
                                    <div className='r-input-box'>
                                        <input className='r-inputs' type="password" placeholder=" 비밀번호를 입력하세요" 
                                        value={password} onChange={onPasswordHandler}/>
                                    </div>
                                    <label className='r-text'>비밀번호 확인</label>
                                    <div className='r-input-box'>
                                        <input className='r-inputs' type="password" placeholder=" 비밀번호를 입력하세요" 
                                        value={passwordChk} onChange={onPasswordCheckHandler}/>
                                    </div>
                                    <label className='r-text'>닉네임</label>
                                    <div className='r-input-box'>
                                        <input className='r-inputs' type="text" placeholder=" 닉네임을 입력하세요" 
                                        value={nickname} onChange={onNicknameHandler}/>
                                    </div>
                                    <label className='r-text'>성별</label>
                                    <div className='r-select-box'>
                                        <select className='r-select' onChange={onGenderHandler} value={gender}>
                                            <option value="0" defaultValue>선택</option>
                                            <option value="남">남</option>
                                            <option value="여">여</option>
                                        </select>
                                    </div>
                                    <label className='r-text'>연령대</label>
                                    <div className='r-select-box'>
                                        <select className='r-select' onChange={onAgeHandler} value={age}>
                                            <option value="0" defaultValue>선택</option>
                                            <option value="10">10대</option>
                                            <option value="20">20대</option>
                                            <option value="30">30대</option>
                                        </select>
                                    </div>
                                    <label className='r-text'>평소 스타일</label>
                                    <div className='r-select-box'>
                                        {
                                            gender === "여" ? 
                                            <select className='r-select' onChange={onStyleHandler} value={style}>
                                                <option value="0" defaultValue>선택</option>
                                                <option value="basic">basic</option>
                                                <option value="campus">campus</option>
                                                <option value="romantic">romantic</option>
                                                <option value="office">office</option>
                                            </select> : 
                                            <select className='r-select' onChange={onStyleHandler} value={style}>
                                                <option value="0" defaultValue>선택</option>
                                                <option value="formal">formal</option>
                                                <option value="basic">basic</option>
                                                <option value="campus">campus</option>
                                                <option value="sports">sports</option>
                                            </select>
                                        }
                                    </div>
                                </div>
                                <div className='signup-btn-box'>
                                    <button className='signup-btn'>Sign up</button>
                                </div>
                            </form>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;