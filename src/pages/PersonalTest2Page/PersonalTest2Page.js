import React, {useRef, useState, useEffect, Component} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './PersonalTest2Page.css';
import back from '../../assets/image/arrow_icon.jpg';
import Camera from '../../components/Camera/Camera';
import { useNavigate } from 'react-router-dom';

const PersonalTest2Page = (props) => {

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
      '#FEF7C0','#F9AB84','#F2635D','#9FD067','#72C6A4'];
    const spring_bright = [
      '#C9CAE8','#A1C5DD','#5F89A2','#EA77B0','#AFBAC0'];
    const summer_mute = [
      '#FFD205','#E46F1F','#F79C89','#4E6F18','#00525E'];
    const summer_light = [
      '#750047','#015CAB','#2E3784','#38383A','#8B0029'];
    const autumn_mute = [
      '#FEF7C0','#F9AB84','#F2635D','#9FD067','#72C6A4'];
    const autumn_deep = [
      '#C9CAE8','#A1C5DD','#5F89A2','#EA77B0','#AFBAC0'];
    const winter_deep = [
      '#FFD205','#E46F1F','#F79C89','#4E6F18','#00525E'];
    const winter_bright = [
      '#750047','#015CAB','#2E3784','#38383A','#8B0029'];

    // 세부 타입 처리
    const spring_detail = {
        spring_light: 0,
        spring_bright: 0
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

    
    return (
        <div>
            <header id='personal-test-header'>
                <div onClick={onClick}><img src={back} /></div>
                <span>step 2. 세부 타입 진단</span>
            </header>
            <div id='personal-main-box'>
                <Camera/>
                <div ref={currentColor} id='current-color'></div>
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