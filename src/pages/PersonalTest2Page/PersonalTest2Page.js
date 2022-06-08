import React, {useEffect, useRef, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './PersonalTest2Page.css';
import back from '../../assets/image/arrow_icon.jpg';
import Camera from '../../components/Camera/Camera';
import { useNavigate, useLocation } from 'react-router-dom';

const PersonalTest2Page = () => {
    
    const location = useLocation();
    // 다 선택됐는지
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

    // 처음 렌더링 시 계절타입 결정
    const [colorOne, setColorOne] = useState([]);
    const [colorTwo, setColorTwo] = useState([]);


    useEffect(() => {

      const { season } = location.state; // season 받아옴
      console.log(season);
      if (season === "spring") {
        setColorOne([...spring_light, "spring_light"]);
        setColorTwo([...spring_bright, "spring_bright"]);
      } else if (season === "summer") {
        setColorOne([...summer_mute, "summer_mute"]);
        setColorTwo([...summer_light, "summer_light"]);
      } else if (season === "autumn") {
        setColorOne([...autumn_mute, "autumn_mute"]);
        setColorTwo([...autumn_deep, "autumn_deep"]);
      } else if (season === "winter") {
        setColorOne([...winter_deep, "winter_deep"]);
        setColorTwo([...winter_bright, "winter_bright"]);
      }
    }, [])

    //console.log(colorOne, colorTwo);

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

    const calcCount = (obj) => {
      const val = Object.values(obj);
      let max = Math.max(...val);
      return Object.keys(obj).find(key => obj[key] === max);
    }

    let cnt = 0;
    const onDetailHandler = (e) => {
        cnt++;
        console.log(e.currentTarget.value);
        currentColor.current.style = `background: ${e.currentTarget.style.backgroundColor}`;
        if(e.currentTarget.value === "spring_light"){
          spring_detail.spring_light++;
        } else if (e.currentTarget.value === "spring_bright"){
          spring_detail.spring_bright++;
        } else if (e.currentTarget.value === "summer_mute"){
          spring_detail.summer_mute++;
        } else if (e.currentTarget.value === "summer_light"){
          spring_detail.summer_light++;
        }else if (e.currentTarget.value === "autumn_mute"){
          spring_detail.autumn_mute++;
        } else if (e.currentTarget.value === "autumn_deep"){
          spring_detail.autumn_deep++;
        } else if (e.currentTarget.value === "winter_deep"){
          spring_detail.winter_deep++;
        } else if (e.currentTarget.value === "winter_bright"){
          spring_detail.winter_bright++;
        }

        if(cnt === 5) {
          // 5개 선택 후 로직 처리
          setDetailType(calcCount(spring_detail));
          setIsSelected(true);
        }
    }


    const onClickNextTest = () => {
       navigate("/personalResult", {
        state: {
          detail: detailType,
          mypage: false
        },
      });
    }

    const makeBtn = (arr) => {
      const result = [];
      for (let i=0; i<arr.length-1; i++ ) {
        result.push(<button value={`${arr[5]}`} 
        style={{
          backgroundColor: `${arr[i]}`,
          display: 'inline-block',
          width: '20%',
          height: '100%',
          border: '0px'
        }} onClick={onDetailHandler}></button>);
      }
      return result;
    }

    
    return (
        <div>
            <header id='personal-test-header'>
                <div onClick={onClick}><img src={back} /></div>
                <span>step 2. 세부 타입 진단</span>
            </header>
            <div id='personal-main-box'>
                <Camera/>
                <Slider {...settings}>
                  <article id='s1'>
                    { makeBtn(colorOne) }
                  </article>
                  <article id='s2'>
                    { makeBtn(colorTwo) }
                  </article>
                </Slider>
                <div ref={currentColor} id='current-color'>
                  { isSelected ? <button id='next-btn' 
                  onClick={onClickNextTest}>5개의 색상이 선택되었습니다 !
                  <br/>클릭 후 다음 페이지로 이동해 주세요</button> : null }
                </div>
            </div>
        </div>
    );
};

export default PersonalTest2Page;