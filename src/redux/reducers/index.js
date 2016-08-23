import { combineReducers } from 'redux';
import auth from './authReducer';
import profiles from './profileReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  auth,
  profiles,
  ajaxCallsInProgress
});

export default rootReducer;
