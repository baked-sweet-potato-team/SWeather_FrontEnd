import React, { useState } from 'react';
import './Accordion.css'
import down from '../../assets/image/main_icon1.jpg';
import up from '../../assets/image/main_icon2.jpg';


const Accordion = ({ title, content }) => {

  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => {
            setIsActive(!isActive);
            
            }}>
        <div className='accordion-title-text'>{title}</div>
        <div>{isActive ? <img src={up} style={{width: "15px"}}/> :  <img src={down} style={{width: "15px"}}/>}</div>
      </div>
        {isActive && <div className="accordion-content">
            {content}
        </div>}
    </div>
  );
};

export default Accordion;