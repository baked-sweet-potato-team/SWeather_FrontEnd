import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

import './MainPage.css'
import Header from '../../components/Header/Header';
import Bottombar from '../../components/Bottombar/Bottombar';
import Accordion from '../../components/Accordion/Accordion';
import Weather from '../../components/Weather/Weather';
import TPO from '../../components/TPO/TPO';
import Personal from '../../components/Personal/Personal';


// 모바일 전체화면 조정
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("—vh", `${vh}px`);

window.addEventListener("resize", () => {
    console.log("resize");
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("—vh", `${vh}px`);
});

function MainPage() {
    const navigate = useNavigate();
    const accordionData = [
        {
          title: '오늘 날씨에 이런 옷은 어떨까요 ?',
          content: <Weather/>
        },
        {
          title: '오늘 TPO에 이런 옷은 어떨까요 ?',
          content: <TPO/>
        },
        {
          title: '퍼스널 컬러에 맞는 이런 옷은 어떨까요 ?',
          content: <Personal/>
        }
      ];


    return (
        <div className='mc1'>
            <div className='mc2'>
                <Header/>
                <section>
                    <div className='main-container'>
                        <div className='main-body'>
                            {/* 제일 위 title 부분 */}
                            <div className='title-text-box'>
                                <p className='main-text'>Today's</p>
                                <p className='main-text'>Style</p>
                            </div>
                            {/* 아래 select box 부분 */}
                            <div className='accordion-box'>
                            {
                                accordionData.map(({ title, content }) => (
                                    <Accordion title={title} content={content} />)
                                )
                            }
                            </div>
                        </div>  
                    </div>
                </section>
                <div style={{width:"100%", height:"70px", backgroundColor:"#222F7D"}}></div>
                <Bottombar/>
            </div>
        </div>
    );
};

export default MainPage;

// { true ? <Header/> : null } -> 삼항 연산자
// <button onClick={onClickHandler}>log out</button> -> 로그아웃 버튼