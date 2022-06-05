import React, {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { auth } from '../../_actions/user_action';
import AuthTPO from '../../components/AuthTPO/AuthTPO';
import NoAuthBox from '../../components/NoAuthBox/NoAuthBox';

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
            {isAuth ? <AuthTPO/>: <NoAuthBox/>}
        </div>
    );
};

export default TPO;