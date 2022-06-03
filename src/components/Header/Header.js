import React from 'react';
import logo from '../../assets/image/PartlyCloudy.png'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className='logoandtextbox'>
                <div className='logo-box'><img className='logo' src={logo}/></div>
                <div className='logo-text'>Sweather</div>
            </div>
        </div>
    );
};

export default Header;