import React, {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { auth, weatherRecommand } from '../../_actions/user_action';
import AuthWeather from '../AuthWeather/AuthWeather';
import NoAuthBox from '../NoAuthBox/NoAuthBox';
import './Weather.css';

// axios로 auth 확인한 다음에
// user아니면 로그인하라고 하고
// user이면 추천정보 띄워주기 !

function Weather() {
    
    const dispatch = useDispatch();
    const [isAuth, setIsAuth] = useState();

    useEffect(() => {
        dispatch(auth())
        .then(response => {
            if(response.payload.isAuth) {
                setIsAuth(true);
            } else {
                setIsAuth(false);
            }
        })
    },[])

    return (
        <div>
            {/* isAuth를 통해 회원/비회원 구분 */}
            { isAuth ? <AuthWeather/> : <div className='box'><NoAuthBox/></div> }
        </div>
    );
};

export default Weather;