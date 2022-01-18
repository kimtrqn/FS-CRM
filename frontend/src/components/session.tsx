import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/actions/SessionActions';
import { useHistory, useRouteMatch } from "react-router-dom";
import IPage from '../redux/interface/pages';
import { RouteComponentProps, withRouter } from 'react-router-dom';

const SessionForm: React.FunctionComponent<IPage & RouteComponentProps<any>> = props => {
    const dispatch = useDispatch();
    const history = useHistory();
    const match = useRouteMatch();
    const [ email, setEmail ] = useState<string>('');
    const [ password, setPassword ] = useState<string>('');
    const isLogin = match.path === '/login';
    const isSignup = !isLogin;


    const updateEmail = (event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value);
    const updatePassword = (event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value);

    const handleSubmit = async (e:any) => {
        e.preventDefault();

        const user = {
            email,
            password
        };

        if (isLogin) {
            await dispatch(login(user))
            history.push('/')
        } 
        else {
            // await dispatch(signup(user))
            console.log('hi')
        }
        
         

    }

    return (
        <form action="">
        <input
          id="username"
          className="input"
          onChange={updateEmail}
          placeholder="Username"
          type="text"
          name="username"
          value={email}
        />

        <input
          id="password"
          className="input"
          onChange={updatePassword}
          placeholder="Password"
          type="password"
          name="password"
          value={password}
        />

        <input
          className="input submit"
          onClick={handleSubmit}
          type="submit"
          value={isLogin ? 'Log In' : 'Sign Up'}
        />
        </form>
    )
};

export default withRouter(SessionForm);


