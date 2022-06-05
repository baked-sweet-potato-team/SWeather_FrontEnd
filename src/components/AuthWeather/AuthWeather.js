import React, { useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import './AuthWeather.css';

// 지역 선택 가능하게
function AuthWeather() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    const [address, setAddress] = useState("");
    const [temp, setTemp] = useState("");
    const [weather, setWeather] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);

    const REST_API_KEY = "0d97440332dc80cc979af39b2a245de4";
    const WEATHER_API_KEY = "031a9986e3d7a4894431870dda42f212";

    const onClickHandler = () => {
        // address를 가지고 좌표로 변환 
        if(address === ""){
            alert("검색어를 입력해주세요 !");
        } else {
            // 검색어 -> 좌표 변환
            const coordiResult = axios.get(`https://dapi.kakao.com/v2/local/search/address.json?&query=${address}`,{
                headers: {Authorization: `KakaoAK ${REST_API_KEY}`}})
                .then(res => res.data)
                .then(res => {
                    setLatitude(String(parseInt(res.documents[0].y)));
                    setLongitude(String(parseInt(res.documents[0].x)));
                    console.log(latitude, longitude);
                })
            
            // 좌표 -> 날씨 받기
            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`)
            .then(res => res.data)
            .then(res => {
                setTemp(String(parseInt(res.main.temp)));
                setWeather(res.weather[0]["main"]);
                console.log(temp, weather);
                setIsSuccess(true);
            })
            
            // if (temp) {
            //     navigate("/weather", { 
            //         state: {
            //             addr: address, 
            //             temp: temp, 
            //             weather: weather
            //         },
            //      });
            // }

            // 
        }
    }

    const onAddressHandler = (e) => {
        setAddress(e.currentTarget.value)
    }

    return (
        <div>
            { isSuccess ? 
                <div>
                    <div className='weather-text'>오늘 {address} 날씨는</div>
                    <div className='weather-text'>{temp}도, {weather} 입니다</div>
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