import axios from 'axios';
import * as types from './actionTypes';
import { checkHttpStatus, parseJSON } from '../../utils';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';

export function createLoginSuccess(payload) {
  return { type: types.CREATE_LOGIN_SUCCESS, payload };
}

export function loginError(error) {
  return { type: 'LOGIN_ERROR', error };
}

export function authenticateUser(credentials) {
  return function(dispatch) {
    dispatch(beginAjaxCall);

    const url = 'http://localhost:8000/api/auth/login';

    return axios.post(url, credentials)
    .then(response => {
      //console.log('ResponseSuccess: ', response);
    })
    .catch(error => {
      //console.log('ErrorResponse: ', error.data);

      let err = (error.data.status_code == 422) ? error.data.errors : error.data;

      dispatch(loginError(err));
      throw(err);
    });
  };
}
