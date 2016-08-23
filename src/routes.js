import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Login from './components/auth/Login';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import MainLayout from './components/common/MainLayout';
import AuthenticatedContainer from './containers/AuthenticatedContainer';
import ProfilesPage from './components/profiles/ProfilesPage';
import ManageProfilePage from './components/profiles/ManageProfilePage'; // eslint-disable-line import/no-named-as-default

export default function configRoutes(store) {
  const checkAuthentication = (nextState, replace, callback) => {
    const { dispatch } = store;
    const { auth } = store.getState();
    const { isAuthenticated } = auth;

    if (! isAuthenticated && localStorage.getItem('fame.auth.token')) {
      // TODO:
      // use sockets to fetch currentUser
    } else if (! localStorage.getItem('fame.auth.token')) {
      replace('/login');
    }

    callback();
  };

  return (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />

        <Route component={MainLayout}>
          <Route path="login" component={Login} />
          <Route path="profiles" component={ProfilesPage} />
          <Route path="profile" component={ManageProfilePage} /> // remove when social auth in place
          <Route path="about" component={AboutPage} />

          <Route component={AuthenticatedContainer} onEnter={checkAuthentication}>
            <Route path="profile/:id" component={ManageProfilePage} />
          </Route>
        </Route>
    </Route>
  );
}
