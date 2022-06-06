import React, {useEffect, useState} from 'react';
import './ImageBox.css';

const ImageBox = (props) => {
    
    const SERVER_PORT = "5000";
    let src = "여자코디/겨울/여자겨울로맨틱4.jpg";

    console.log(props.imageRoute);
    return (
        <div id='w-img-box'>
            <img id='codi-box' alt="이미지 없음" src={`http://localhost:${SERVER_PORT}/${src}`} />
        </div>
    );
};

export default ImageBox;