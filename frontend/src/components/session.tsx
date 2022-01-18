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

    return (
        <div>hello world session....</div>
    )
};

export default withRouter(SessionForm);


