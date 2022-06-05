import React from 'react';
import './Bottombar.css';
import {Link} from "react-router-dom";

const Bottombar = () => {
    return (
        <div className='b'>
            <div id="btm">
                <div><Link className='bar-li' to="/personal">퍼스널컬러</Link></div>
                <div><Link className='bar-li' to="/">홈</Link></div>
                <div><Link className='bar-li' to="/my">마이페이지</Link></div>
            </div>
        </div>
    );
};

export default Bottombar;