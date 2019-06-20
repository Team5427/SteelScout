    
import {combineReducers} from 'redux';
import pageReducer from './page-reducer';

const allReducers = combineReducers({
    curPage: pageReducer,
});

export default allReducers