import React from 'react';
import logo from '../../assets/image/PartlyCloudy.png';
import './Header.css'
import arrow_icon from '../../assets/image/arrow_icon.jpg';
import { useNavigate } from 'react-router-dom';

const Header = () => {

    const navigate = useNavigate();

    const onIconHandler = () => {
        navigate(-1);
    }

    return (
        <div className='header'>
            <div className='logoandtextbox'>
                <div id="h-icon" onClick={onIconHandler}><img src={arrow_icon} id='arrow_icon'/></div>
                <div className='logo-box'><img className='logo' src={logo}/></div>
                <div className='logo-text'>Sweather</div>
            </div>
        </div>
    );
};

export default Header;