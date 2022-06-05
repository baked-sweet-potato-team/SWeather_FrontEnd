import React, {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { auth } from '../../_actions/user_action';
import AuthPersonal from '../../components/AuthPersonal/AuthPersonal';
import NoAuthBox from '../../components/NoAuthBox/NoAuthBox';

function Personal() {
    
    const dispatch = useDispatch();
    const [isAuth, setIsAuth] = useState("");

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
            { isAuth ? <AuthPersonal/> : <NoAuthBox/> }
        </div>
    );
};

export default Personal;