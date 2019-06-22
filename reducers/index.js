    
import {combineReducers} from 'redux';
import pageReducer from './page-reducer';
import authReducer from './auth-reducer';

const allReducers = combineReducers({
    curPage: pageReducer,
    auth: authReducer,
});

export default allReducers