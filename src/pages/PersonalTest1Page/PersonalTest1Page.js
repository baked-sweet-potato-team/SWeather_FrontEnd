import React, {useRef, useState, useEffect, Component} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './PersonalTest1Page.css';
import back from '../../assets/image/arrow_icon.jpg';
import Camera from '../../components/Camera/Camera';
import { useNavigate } from 'react-router-dom';

const PersonalTest1Page = () => {

    // 계절타입 결과
    const [seasonType, setSeasontype] = useState('');
    const [isSelected, setIsSelected] = useState(false);

    // 카루셀 세팅
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    
    const currentColor = useRef();
    const navigate = useNavigate();
    const onClick = () => {
        navigate(-1);
    }

    // 계절 타입 색깔 색상 
    const spring = [
      '#FEF7C0','#F9AB84','#F2635D','#9FD067','#72C6A4'];
    const summer = [
      '#C9CAE8','#A1C5DD','#5F89A2','#EA77B0','#AFBAC0'];
    const autumn = [
      '#FFD205','#E46F1F','#F79C89','#4E6F18','#00525E'];
    const winter = [
      '#750047','#015CAB','#2E3784','#38383A','#8B0029'];
    
    // 계절 타입 처리
    const season_cnt = {
      spring: 0,
      summer: 0,
      autumn: 0,
      winter: 0
    };

    const calcCount = (obj) => {
        const val = Object.values(obj);
        let max = Math.max(...val);
        return Object.keys(obj).find(key => obj[key] === max);
    }

    let cnt = 0;
    const onSeasonHandler = (e) => {
        cnt++;
        currentColor.current.style = `background: ${e.currentTarget.style.backgroundColor}`;
        if(e.currentTarget.value === "spring"){
          season_cnt.spring++;
        } else if (e.currentTarget.value === "summer"){
          season_cnt.summer++;
        } else if (e.currentTarget.value === "autumn"){
          season_cnt.autumn++;
        } else if (e.currentTarget.value === "winter"){
          season_cnt.winter++;
        }
        if(cnt === 6) {
          // 6개 선택 후 로직 처리
          //console.log(calcCount(season_cnt));
          setSeasontype(calcCount(season_cnt));
          setIsSelected(true);
        }
    }

    const onClickNextTest = () => {
       navigate("/personalTest2", {
        state: {
          season: seasonType,
        },
      });
    }

    
    return (
        <div>
            <header id='personal-test-header'>
                <div onClick={onClick}><img src={back} /></div>
                <span>step 1. 계절 타입 알아보기</span>
            </header>
            <div id='personal-main-box'>
                <Camera/>
                <Slider {...settings}>
                  <article id='s1'>
                    {
                        spring.map((ele, idx) => <button value={"spring"} onClick={onSeasonHandler}
                        style={{
                          backgroundColor: `${ele}`,
                          display: 'inline-block',
                          width: '20%',
                          height: '200px',
                          border: '0px'
                        }}></button>)
                    }
                  </article>
                  <article id='s2'>
                  {
                        summer.map((ele) => <button value={"summer"} onClick={onSeasonHandler}
                        style={{
                          backgroundColor: `${ele}`,
                          display: 'inline-block',
                          width: '20%',
                          height: '100%',
                          border: '0px'
                        }}></button>)
                    }
                  </article>
                  <article id='s3'>
                  {
                        autumn.map((ele) => <button value={"autumn"} onClick={onSeasonHandler}
                        style={{
                          backgroundColor: `${ele}`,
                          display: 'inline-block',
                          width: '20%',
                          height: '100%',
                          border: '0px'
                        }}></button>)
                    }
                  </article>
                  <article id='s4'>
                  {
                        winter.map((ele) => <button value={"winter"} onClick={onSeasonHandler}
                        style={{
                          backgroundColor: `${ele}`,
                          display: 'inline-block',
                          width: '20%',
                          height: '100%',
                          border: '0px'
                        }}></button>)
                    }
                  </article>
                </Slider>
                <div ref={currentColor} id='current-color'>
                  { isSelected ? <button id='next-btn' onClick={onClickNextTest}>6개의 색상이 선택되었습니다 !<br/>클릭 후 다음 페이지로 이동해 주세요 </button> : null }
                </div>
            </div>
        </div>
    );
};

export default PersonalTest1Page;