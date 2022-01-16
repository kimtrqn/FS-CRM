import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store.js/store';
import jwt_decode from 'jwt-decode';
import { setAuthToken } from './utils/session_util';
// import { logout } from './actions/session_actions';
import Root from './components/root';



document.addEventListener('DOMContentLoaded', () => {
  let store;

  if (localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);
    const decodedUser = jwt_decode(localStorage.jwtToken);
    const preloadedState = {
      entities: { users: { [decodedUser.id]: decodedUser } },
      session: { 
        // isAuthenticated: true, 
        id: decodedUser.id },
    };

    store = configureStore(preloadedState);
    const currentTime = Date.now() / 1000;

    if (decodedUser.exp < currentTime) {
      store.dispatch(logout());
    }
  } else {
    store = configureStore();
  }

  // delete after testing
  // window.getState = store.getState;
  // window.dispatch = store.dispatch;
  // window.logout = logout;

  ReactDOM.render(<Root store={store} />, document.getElementById("root"));
});


