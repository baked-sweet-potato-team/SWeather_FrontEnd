import React, {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { auth, tpoRecommand } from '../../_actions/user_action';
import AuthTPO from '../AuthTPO/AuthTPO';
import NoAuthBox from '../NoAuthBox/NoAuthBox';
import './TPO.css';

function TPO() {
    
    const dispatch = useDispatch();
    const [isAuth, setIsAuth] = useState();

    useEffect(() => {
        dispatch(auth())
        .then(response => {
            if(response.payload.isAuth) {
                setIsAuth(true);
            } else {
                setIsAuth(false);
            }
        })
    },[])

    return (
        <div>
            { isAuth ? 
            <AuthTPO/> 
            : <div className='box'><NoAuthBox/></div> }
        </div>
    );
};

export default TPO;