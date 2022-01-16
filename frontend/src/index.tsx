import React from 'react';
import ReactDOM from 'react-dom';
import Store from './store.js/store';
import jwt_decode from 'jwt-decode';
import { setAuthToken } from './utils/session_util';
// import { logout } from './actions/session_actions';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './App';

interface MyToken {
    id: any,
    email: string,
    password: string
}


document.addEventListener('DOMContentLoaded', () => {
  let store = Store()

  if (localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);
    const decodedUser = jwt_decode<MyToken>(localStorage.jwtToken);
    const preloadedState = {
      entities: { users: { [decodedUser.id]: decodedUser } },
      session: { 
        isAuthenticated: true, 
        id: decodedUser.id },
    };

    store = Store(preloadedState);
    const currentTime = Date.now() / 1000;

    if (decodedUser.exp < currentTime) {
      store.dispatch(logout());
    }
  } else {
    store = Store();
  }

  // delete after testing
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.logout = logout;

  
  ReactDOM.render(
    <Provider store={store}>
      <HashRouter>
          <App />
      </HashRouter>
    </Provider>, 
    document.getElementById("root"));
});


