// 다양한 reducer들이 존재하는데
// combineReducers를 통해서 rootReducer에서 하나로 합쳐줌

import { combineReducers } from 'redux';
import user from './user_reducer';

const rootReducer = combineReducers({
    user
})

export default rootReducer;