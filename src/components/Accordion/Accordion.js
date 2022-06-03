import React, { useState } from 'react';
import './Accordion.css'


const Accordion = ({ title, content }) => {

  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => {
            setIsActive(!isActive);
            
            }}>
        <div className='accordion-title-text'>{title}</div>
        <div>{isActive ? '🔼' : '🔽'}</div>
      </div>
        {isActive && <div className="accordion-content">
            {content}
        </div>}
    </div>
  );
};

export default Accordion;