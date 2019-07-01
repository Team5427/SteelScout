    
import {combineReducers} from 'redux';
import pageReducer from './page-reducer';
import authReducer from './auth-reducer';
import scoutReducer from './scout-reducer';

const allReducers = combineReducers({
    curPage: pageReducer,
    auth: authReducer,
    scout: scoutReducer,
});

export default allReducers