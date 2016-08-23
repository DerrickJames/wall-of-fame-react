import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function authReducer(state = initialState.auth, action) {
  switch(action.type) {
    case types.CREATE_LOGIN_SUCCESS:
      return Object.assign({}, state, action.payload);

    case 'LOGIN_ERROR':
      return Object.assign({}, state, {error: action.error});

    default:
      return state;
  }
}
