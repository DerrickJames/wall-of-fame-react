/* eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './redux/store/configureStore';
import {Provider} from 'react-redux';
import { Router, browserHistory } from 'react-router';
import configRoutes from './routes';
import {loadProfiles} from './redux/actions/profileActions';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css';
import '../node_modules/toastr/build/toastr.min.css';

const store = configureStore();
store.dispatch(loadProfiles());

render(
    <Provider store={store}>
        <Router history={browserHistory}>{configRoutes(store)}</Router>
    </Provider>,
    document.getElementById('app')
);
