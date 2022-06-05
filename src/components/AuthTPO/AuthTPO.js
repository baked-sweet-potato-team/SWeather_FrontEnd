import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { tpoRecommand } from '../../_actions/user_action'
import './AuthTPO.css';

const AuthTPO = () => {

    const [occasion, setOccasion] = useState("");
    const [people, setPeople] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);
    const [imageRoute, setImageRoute] = useState("");
    const people_arr = ['연인', '가족', '친구', '직장', '처음 보는 사람'];
    const occasion_arr = ['데이트', '경사', '여행', '운동', '직장', '데일리'];
    
    const dispatch = useDispatch();
    
    const onTPObtnHandler = (e) => {
        e.preventDefault();

        let body = {
            occasion: occasion,
            people: people
        }
        
        if(!occasion || !people ){
            alert("TPO를 선택해 주세요 !");
        }
        else {
            dispatch(tpoRecommand(body))
            .then(res => res.payload.image)
            .then(res => {
                console.log(res);
                setImageRoute(res);
            });
            setIsSuccess(true);
        }
    }

    const onPeopleHandler = (e) => {
        setPeople(e.currentTarget.value);
    }

    const onOccasionHandler = (e) => {
        setOccasion(e.currentTarget.value);
    }
    
    return (
        <div>
            {
                isSuccess ? 
                <div>&nbsp;&nbsp;&nbsp;{imageRoute}</div>
                :
                <div>
                    <span>오늘 누구와 무엇을 하나요 ? </span>
                    <div id='tpo-select-box'>
                        <select onChange={onPeopleHandler}>
                            { people_arr.map(e => <option>{e}</option>) }
                        </select> &nbsp;&nbsp;와<br/>
                        <select onChange={onOccasionHandler}>
                            { occasion_arr.map(e => <option>{e}</option>) }
                        </select>&nbsp;&nbsp;를 갈(할) 예정입니다
                        <button id='tb' onClick={onTPObtnHandler}>코디 추천받으러 가기</button>
                    </div>
                </div>
            }
        </div>
    );
};

export default AuthTPO;