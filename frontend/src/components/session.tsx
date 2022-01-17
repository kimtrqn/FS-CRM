import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/actions/SessionActions';
import { useHistory, useRouteMatch } from "react-router-dom";
import { render } from '@testing-library/react';


const SessionForm = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const match = useRouteMatch();
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const isLogin = match.path === '/login';
    const isSignup = !isLogin;


    const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value);
    const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value);

    const handleSubmit = async (e:any) => {
        e.preventDefault();

        const user = {
            email,
            password
        };

        if (isLogin) {
            await dispatch(login(user))
        } 
        // else {
        //     await dispatch(signup(user))
        // }
        

    }

    return {
        <div>hello world</div>
    }
};

export default SessionForm;


