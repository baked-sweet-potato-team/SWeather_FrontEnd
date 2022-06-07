import React, {useRef, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './PersonalTest2Page.css';
import back from '../../assets/image/arrow_icon.jpg';
import Camera from '../../components/Camera/Camera';
import { useNavigate, useLocation } from 'react-router-dom';

const PersonalTest2Page = () => {

    const location = useLocation();
    const { season } = location.state; // season 받아옴
    const [isSelected, setIsSelected] = useState(false);
    
    // 세부타입 결과
    const [detailType, setDetailType] = useState('');
    
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

    // 세부 타입 색깔 색상 
    const spring_light = [
      '#F7A4B8','#FCE6D9','#E61648','#4664BE','#66472B'];
    const spring_bright = [
      '#064BCB','#FFEDAF','#F03A51','#D270AD','#C6B7BA'];
    const summer_mute = [
      '#F7C0D3','#E7A5AF','#CF99B3','#8791B6','#9EBAA3'];
    const summer_light = [
      '#EED3DF','#E5849D','#DAC7A6','#685AB2','#675AB2'];
    const autumn_mute = [
      '#ABA1A0','#ECA6B1','#AACDC6','#76ACD3','#5B6097'];
    const autumn_deep = [
      '#e9a3a4','#ca2b51','#b48c68','#74142f','#7c2760'];
    const winter_deep = [
      '#068c37','#f1564a','#c20467','#69057f','#0150d8'];
    const winter_bright = [
      '#b52b4a','#d45170','#ce4942','#9fa0b2','#ffffff'];

    // 세부 타입 처리
    const spring_detail = {
        spring_light: 0,
        spring_bright: 0,
        summer_mute: 0,
        summer_light: 0,
        autumn_mute: 0,
        autumn_deep: 0,
        winter_deep: 0,
        winter_bright: 0,
    }

    // const calcCount = (obj) => {
    //     const val = Object.values(obj);
    //     let max = Math.max(...val);
    //     return Object.keys(obj).find(key => obj[key] === max);
    // }

    // let cnt = 0;
    // const onDetailHandler = (e) => {

    //     cnt++;
    //     currentColor.current.style = `background: ${e.currentTarget.style.backgroundColor}`;
    //     if(e.currentTarget.value === "spring"){
    //       season_cnt.spring++;
    //     } else if (e.currentTarget.value === "summer"){
    //       season_cnt.summer++;
    //     } else if (e.currentTarget.value === "autumn"){
    //       season_cnt.autumn++;
    //     } else if (e.currentTarget.value === "winter"){
    //       season_cnt.winter++;
    //     }
    //     if(cnt === 6) {
    //       // 6개 선택 후 로직 처리
    //       setDetailType(calcCount(season_cnt));
          
    //     }
    // }

    const onClickNextTest = () => {
      console.log(detailType);
       navigate("/personalResult", {
        state: {
          detail: detailType,
        },
      });
    }

    
    return (
        <div>
            <header id='personal-test-header'>
                <div onClick={onClick}><img src={back} /></div>
                <span>step 2. 세부 타입 진단</span>
            </header>
            <div id='personal-main-box'>
                <Camera/>
                <div ref={currentColor} id='current-color'>
                  { isSelected ? <button id='next-btn' onClick={onClickNextTest}>6개의 색상이 선택되었습니다 !<br/>클릭 후 다음 페이지로 이동해 주세요</button> : null }
                </div>
                <Slider {...settings}>
                  <article id='s1'>
                    {
                        spring_light.map((ele) => <button value={"spring"}
                        style={{
                          backgroundColor: `${ele}`,
                          display: 'inline-block',
                          width: '20%',
                          height: '100%',
                          border: '0px'
                        }}></button>)
                    }
                  </article>
                  <article id='s2'>
                  {
                        spring_bright.map((ele) => <button value={"summer"}
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
            </div>
        </div>
    );
};

export default PersonalTest2Page;