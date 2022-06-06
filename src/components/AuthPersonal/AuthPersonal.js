import React, {useState} from 'react';

const AuthPersonal = () => {

    // personal 통신 했을때 유저정보에 퍼스널컬러 정보
    // 없으면 -> 진단페이지로
    // 있으면 -> 코디 추천정보 출력
    const [isExist, setIsExist] = useState();
    
    return (
        <div>
            {
                isExist ?
                <div> 퍼스널 컬러 존재</div>
                :
                <div> 퍼스널 컬러 진단 필요</div>
            }
        </div>
    );
};

export default AuthPersonal;