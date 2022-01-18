import * as SessionUtil from '../../utils/session_util';
import jwt_decode from 'jwt-decode'
import { Dispatch } from 'redux';
import ActionTypes from './types';
import { SessionActions } from '../interface/session';



interface MyToken {
    id: any,
    email: string,
    password: string
}


export const login = (user: any) => async (dispatch: Dispatch<SessionActions>) => {
    debugger
    try {
        const res = await SessionUtil.login(user);
        const { token } = res.data;
        localStorage.setItem("jwtToken", token);
        SessionUtil.setAuthToken(token);
        const decodedToken = jwt_decode<MyToken>(token);


        dispatch({ type: ActionTypes.LOGIN_USER, payload: decodedToken });
    } catch (error) {
        (console.log(error))
    }

}

// export const logout = () => dispatch => {
//     localStorage.removeItem('jwtToken');
//     SessionUtil.setAuthToken(false);
//     dispatch(logoutUser());
// };

// export const clearErrors = () => dispatch => {
//     dispatch(clearSessionErrors());
// };