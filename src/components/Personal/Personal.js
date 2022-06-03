import React, {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { auth, personalRecommand } from '../../_actions/user_action';
import AuthPersonal from '../AuthPersonal/AuthPersonal';
import NoAuthBox from '../NoAuthBox/NoAuthBox';
import './Personal.css';

function Personal() {
    
    const dispatch = useDispatch();
    const [isAuth, setIsAuth] = useState("");

    useEffect(() => {
        dispatch(auth())
        .then(response => {
            console.log("p-auth",response);
            if(response.payload.isAuth) {
                dispatch(personalRecommand())
                .then(res => {
                    console.log("p-auth",res);
                    setIsAuth(true);
                })
            } else {
                setIsAuth(false);
            }
        })
    },[])

    return (
        <div>
            {/* isAuth를 통해 회원/비회원 구분 */}
            { isAuth ? <AuthPersonal/> : <div className='box'><NoAuthBox/></div> }
        </div>
    );
};

export default Personal;