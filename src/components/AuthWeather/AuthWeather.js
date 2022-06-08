import React, { useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import {weatherRecommand} from '../../_actions/user_action';
import './AuthWeather.css';
import ImageBox from '../../components/ImageBox/ImageBox';

// 지역 선택 가능하게
const AuthWeather = () => {

    const dispatch = useDispatch();
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    const [address, setAddress] = useState("");
    const [temp, setTemp] = useState("");
    const [weather, setWeather] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);
    const [imageRoute, setImageRoute] = useState("");

    // api key
    const REST_API_KEY = "0d97440332dc80cc979af39b2a245de4";
    const WEATHER_API_KEY = "031a9986e3d7a4894431870dda42f212";

    // 오늘 날짜 구하기
    let now = new Date();	// 현재 날짜 및 시간
    let month = now.getMonth() + 1;
    let date = now.getDate();
    const week = ['일', '월', '화', '수', '목', '금', '토'];
    let dayOfWeek = week[now.getDay()];

    const onClickHandler = () => {
        // address를 가지고 좌표로 변환 
        if(address === ""){
            alert("검색어를 입력해주세요 !");
        } else {

            // 1. 검색어 -> 좌표 변환
            axios.get(`https://dapi.kakao.com/v2/local/search/address.json?&query=${address}`,{
                headers: {Authorization: `KakaoAK ${REST_API_KEY}`}})
                .then(res => res.data)
                .then(res => {
                    setLatitude(String(parseInt(res.documents[0].y)));
                    setLongitude(String(parseInt(res.documents[0].x)));
                    console.log(latitude, longitude);
                })
            
            // 2. 좌표 -> 날씨 받기
            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`)
                .then(res => res.data)
                .then(res => {
                    setTemp(String(parseInt(res.main.temp)));
                    setWeather(res.weather[0]["main"]);
                    setIsSuccess(true); // 날씨 받기 성공
                    console.log(temp, weather);
                })
            
        }
    }

    useEffect(() => {
        // 3. 날씨 -> 추천 코디 받기
        let body = { weather : temp};
        dispatch(weatherRecommand(body))
        .then(res => res.payload.image)
        .then(res => {
            console.log(res);
            setImageRoute(res);
        })
    }, [temp]);

    const onAddressHandler = (e) => {
        setAddress(e.currentTarget.value)
    }

    return (
        <div>
            { isSuccess ? 
                <div id='wrc-container'>
                    <div id='text-container'>
                        <div className='weather-text'>{month}월 {date}일 ({dayOfWeek})</div>
                        <div id='addr-text'>{address} 의 날씨는</div>
                        <div className='weather-text'>{temp}도, {weather} 입니다</div>
                    </div>
                    <span>오늘의 recommanded cody</span>
                    {/* 추천받는 이미지 자리 */}
                    <ImageBox imageRoute={imageRoute}/>
                </div>
                : <div>
                    <span id="t">지역을 입력해 주세요 ! </span>
                    <div className='main-weather-container'>
                        <input id="i" type="text" value={address} onChange={onAddressHandler} placeholder=" ex) 00시 00동"></input>
                        <button id="b" onClick={onClickHandler}>search</button>
                    </div>
                </div>
            }
        </div>
    );
};

export default AuthWeather;