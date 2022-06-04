import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useDispatch} from 'react-redux'
import {weatherRecommand} from '../../_actions/user_action';
import './AuthWeather.css';
//import i from '../../assets/views/여자코디/봄/여자봄베이직3.jpg';

// 지역 선택 가능하게
function AuthWeather() {

    const dispatch = useDispatch()
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    const [address, setAddress] = useState("");
    const [temp, setTemp] = useState("");
    const [weather, setWeather] = useState("");
    const [imageRoute, setImageRoute] = useState("");
    const [flag, setFlag] = useState(false);

    const REST_API_KEY = "0d97440332dc80cc979af39b2a245de4";
    const WEATHER_API_KEY = "031a9986e3d7a4894431870dda42f212";
    let img_final_route = "";

    const onClickHandler = () => {
        // address를 가지고 좌표로 변환 
        if(address === ""){
            alert("검색어를 입력해주세요 !");
        } else {
            // 검색어 -> 좌표 변환
            const coordiResult = axios.get(`https://dapi.kakao.com/v2/local/search/address.json?&query=${address}`,{
                headers: {Authorization: `KakaoAK ${REST_API_KEY}`}})
            .then(response => response.data)
            .then(res => {
                setLatitude(String(parseInt(res.documents[0].y)));
                setLongitude(String(parseInt(res.documents[0].x)));
                console.log(latitude, longitude);
            })
            
            
            const tempResult = coordiResult.then(axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`)
            .then(res => {
                setTemp(String(parseInt(res.data.main.temp)));
                setWeather(res.data.weather[0]["main"]);
                console.log(temp, weather);
            }))

            let body = {
                weather: temp
            }

            tempResult.then(
                dispatch(weatherRecommand(body))
                .then(res => {
                    console.log(res.payload.image);
                    img_final_route = "../../assets/"+res.payload.image;
                    setImageRoute(img_final_route);
                    setFlag(true);
                })
            )

        }
    }

    const onAddressHandler = (e) => {
        setAddress(e.currentTarget.value)
    }

    return (
        <div>
            <span id="t">지역을 입력해 주세요 ! </span>
            <div className='main-weather-container'>
                <input id="i" type="text" value={address} onChange={onAddressHandler} placeholder=" ex) 00시 00동"></input>
                <button id="b" onClick={onClickHandler}>search</button>
            </div>
        </div>
    );
};

export default AuthWeather;