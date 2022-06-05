import React, {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { auth } from '../../_actions/user_action';
import AuthWeather from '../../components/AuthWeather/AuthWeather';
import NoAuthBox from '../../components/NoAuthBox/NoAuthBox';

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
            { isAuth ? <AuthWeather/> : <NoAuthBox/> }
        </div>
    );
};

export default Weather;