import React, {useState} from 'react';
import MyHeader from '../../components/Header/Header'
import './RegisterPage.css'

import {useDispatch} from 'react-redux'
import {signupUser} from '../../_actions/user_action'

function RegisterPage() {

    const dispatch = useDispatch()
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const [PasswordChk, setPasswordChk] = useState("")
    const [Nickname, setNickname] = useState("")
    const [Gender, setGender] = useState("")
    const [Age, setAge] = useState("")
    const [Style, setStyle] = useState("")

    // handler
     const onEmailHandler = (e) => {
        setEmail(e.currentTarget.value)
    }

    const onPasswordHandler = (e) => {
        setPassword(e.currentTarget.value)
    }

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
        if(Password !== PasswordChk){
            return alert('비밀번호와 비밀번호 확인이 일치하지 않습니다.')
        }

         // 보낼 데이터
        let body = { 
            email: Email,
            password: Password,
            nickname: Nickname,
            gender: Gender,
            age: Age,
            style: Style
        }
        console.log(body)
        // dispatch를 이용해서 signupUser라는 action 취하기
        // 여기서 response는 action을 통해 받은 type과 payload
        dispatch(signupUser(body))
        .then(response => {
            console.log("회원가입",response);
            if(response.payload.success) {
                // 회원가입 성공 시 로그인 화면 전환 
                window.location.href = "/login"
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
                                        value={Email} onChange={onEmailHandler}/>
                                    </div>
                                    <label className='r-text'>비밀번호</label>
                                    <div className='r-input-box'>
                                        <input className='r-inputs' type="password" placeholder=" 비밀번호를 입력하세요" 
                                        value={Password} onChange={onPasswordHandler}/>
                                    </div>
                                    <label className='r-text'>비밀번호 확인</label>
                                    <div className='r-input-box'>
                                        <input className='r-inputs' type="password" placeholder=" 비밀번호를 입력하세요" 
                                        value={PasswordChk} onChange={onPasswordCheckHandler}/>
                                    </div>
                                    <label className='r-text'>닉네임</label>
                                    <div className='r-input-box'>
                                        <input className='r-inputs' type="text" placeholder=" 닉네임을 입력하세요" 
                                        value={Nickname} onChange={onNicknameHandler}/>
                                    </div>
                                    <label className='r-text'>성별</label>
                                    <div className='r-select-box'>
                                        <select className='r-select' onChange={onGenderHandler} value={Gender}>
                                            <option value="0" defaultValue>선택</option>
                                            <option value="남">남</option>
                                            <option value="여">여</option>
                                        </select>
                                    </div>
                                    <label className='r-text'>연령대</label>
                                    <div className='r-select-box'>
                                        <select className='r-select' onChange={onAgeHandler} value={Age}>
                                            <option value="0" defaultValue>선택</option>
                                            <option value="10">10대</option>
                                            <option value="20">20대</option>
                                            <option value="30">30대</option>
                                        </select>
                                    </div>
                                    <label className='r-text'>평소 스타일</label>
                                    <div className='r-select-box'>
                                        <select className='r-select' onChange={onStyleHandler} value={Style}>
                                            <option value="0" defaultValue>선택</option>
                                            <option value="casual">casual</option>
                                            <option value="street">street</option>
                                            <option value="basic">basic</option>
                                            <option value="campus">campus</option>
                                            <option value="lovely">lovely</option>
                                            <option value="romantic">romantic</option>
                                            <option value="office">office</option>
                                        </select>
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