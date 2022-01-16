import * as SessionUtil from '../../utils/session_util';
import jwt_decode, { JwtPayload } from 'jwt-decode'
import { Dispatch } from 'redux';
import ActionTypes from './types';
import { SessionActions } from '../types/session';



interface MyToken {
    id: any,
    email: string,
    password: string
}




export const login = (user: any) => async (dispatch: Dispatch<SessionActions>) => {

    try {
        const res = await SessionUtil.signup(user);
        const { token } = res.data;
        localStorage.setItem("jwtToken", token);
        SessionUtil.setAuthToken(token);
        const decodedToken = jwt_decode<MyToken>(token);


        dispatch({ type: ActionTypes.LOGIN_USER, payload: decodedToken });
    } catch (error) {
        dispatch({ type: ActionTypes.SESSION_ERRORS})
    }

}

// export const login = (user: any) => async (dispatch: Dispatch) => {
//     // return(
//     // await SessionUtil.login(user)
//     //     .then(res => {
//     //         const { token } = res.data;
//     //         localStorage.setItem('jwtToken', token);
//     //         SessionUtil.setAuthToken(token);
//     //         const decoded = jwt_decode(token);
//     //         dispatch(loginUser(decoded));
//     //     } )
//     //     .catch(err => {
//     //         dispatch(sessionErrors(err))
//     //     }))
//     try {

//     } catch(e)
// };

// export const login = user => dispatch => {
//     return (
//         SessionUtil.login(user)
//             .then(res => {
//             const { token } = res.data;
//             localStorage.setItem('jwtToken', token);
//             SessionUtil.setAuthToken(token);
//             const decoded = jwt_decode(token);
//             dispatch(loginUser(decoded));
//             }), err => dispatch(sessionErrors(err))
//     )
// }


export const logout = () => dispatch => {
    localStorage.removeItem('jwtToken');
    SessionUtil.setAuthToken(false);
    dispatch(logoutUser());
};

export const clearErrors = () => dispatch => {
    dispatch(clearSessionErrors());
};