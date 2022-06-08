import React, {useState} from 'react'
import './LoginPage.css'
import MyHeader from '../../components/Header/Header'

// react-router-dom
import {Link, useNavigate} from "react-router-dom";

// redux
import {useDispatch} from 'react-redux'
import {loginUser} from '../../_actions/user_action'

function LoginPage() {

    // dispatch 사용
    const dispatch = useDispatch()
    
    // navigate 사용
    const navigate = useNavigate()

    // 상태 관리해야하는 변수 (이메일, 비밀번호)
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")

    // input 이벤트가 발생하면 해당 state값을 타겟의 value로 설정
    const onEmailHandler = (e) => {
        // console.log(event.currentTarget) -> 해당 input html 리턴
        setEmail(e.currentTarget.value)
    }

    const onPasswordHandler = (e) => {
        setPassword(e.currentTarget.value)
    }

    const onSubmitHandler = (e) => {
        // page refresh 방지
        e.preventDefault()
        // console.log(Email, Password) -> state 잘 받아옴

        // 보낼 데이터
        let body = {
            email: Email,
            password: Password
        }

        // dispatch를 이용해서 loginUser라는 action 취하기
        // 여기서 response는 action을 통해 받은 type과 payload
        dispatch(loginUser(body))
        .then(response => {
            if(response.payload.loginSuccess) {
                // 로그인 성공 시 메인화면 전환 
                navigate('/')
            }
            else {
                // 로그인 실패 시 오류 출력
                alert(response.payload.message)
            }
        })
    }

    return (
        <div>
            <div className='container'>
                <div className='main-box'>
                    <section className='header'>
                        <MyHeader/>
                    </section>
                    <section className='main'>
                        <div className='login-box'>
                            <div className='login-text-box'>
                                <p className='login-text'>Login</p>
                            </div>
                            <form className='input-group' onSubmit={onSubmitHandler}>
                                <div className='input-group-box'>
                                    <label className='text'>이메일</label>
                                    <div className='input-box'>
                                        <input className='inputs' type="email" placeholder=" 이메일을 입력하세요" 
                                        value={Email} onChange={onEmailHandler}/>
                                    </div>
                                    <label className='text'>비밀번호</label>
                                    <div className='input-box'>
                                        <input className='inputs' type="password" placeholder=" 비밀번호를 입력하세요" 
                                        value={Password} onChange={onPasswordHandler}/>
                                    </div>
                                </div>
                                <div className='login-btn-box'>
                                    <button className='login-btn'>Login</button>
                                </div>
                            </form>
                        </div>
                    </section>
                    <section className='bottom'>
                        <p className='text_01'>아직 계정이 없으신가요 ?</p>
                        <div className='signup-btn-box'>
                            <Link to="/register"><input type="button" value="Sign Up" className='signup-btn'/></Link>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;