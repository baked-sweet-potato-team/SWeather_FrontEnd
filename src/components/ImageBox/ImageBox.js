import React from 'react';
import './ImageBox.css';

const ImageBox = (props) => {
    return (
        <div id='w-img-box'>
            {props.imageRoute}
            <img id='codi-box' src='http://localhost:5000/남자코디/가을/남자가을베이직3.jpg'/>
        </div>
    );
};

export default ImageBox;