import React, {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { auth, tpoRecommand } from '../../_actions/user_action';
import AuthTPO from '../AuthTPO/AuthTPO';
import NoAuthBox from '../NoAuthBox/NoAuthBox';
import './TPO.css';

// axios로 auth 확인한 다음에
// user아니면 로그인하라고 하고
// user이면 추천정보 띄워주기 !

function TPO() {
    
    const dispatch = useDispatch();
    const [isAuth, setIsAuth] = useState();

    useEffect(() => {
        dispatch(auth())
        .then(response => {
            console.log("t-auth",response);
            if(response.payload.isAuth) {
                dispatch(tpoRecommand())
                .then(res => {
                    // 회원이 추천결과를 요청한 경우
                    console.log("in-t-auth",res);
                    setIsAuth(true);
                })
            } else {
                // 회원이 아닌 경우
                setIsAuth(false);
            }
        })
    },[])

    return (
        <div>
            {/* isAuth를 통해 회원/비회원 구분 */}
            { isAuth ? <AuthTPO/> : <div className='box'><NoAuthBox/></div> }
        </div>
    );
};

export default TPO;