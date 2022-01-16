import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/actions/SessionActions';
import { useHistory } from "react-router-dom";



const Login = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');


    const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value);
    const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value);

    const handleSubmit = async (e:any) => {
        e.preventDefault();

        const user = {
            email,
            password
        };

        await dispatch(login(user));

    }
};

export default Login;


