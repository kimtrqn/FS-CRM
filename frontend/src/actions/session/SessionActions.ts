import * as SessionUtil from '../../utils/session_util';
import jwt_decode from 'jwt-decode';
import { Dispatch } from 'redux';
import 


export const signup = (user: any) => async (dispatch: Dispatch) => {

    try {
        const res = await SessionUtil.signup(user);
        const { token } = res.data;
        localStorage.setItem("jwtToken", token);
        SessionUtil.setAuthToken(token);
        const decoded = jwt_decode(token);

        dispatch()
    }
    return SessionUtil.signup(user)
        // .then(res => 
        //     res.status(201).send('Account Created')
        // )
        .then(res => {
            // console.log(res)
            const { token } = res.data;
            localStorage.setItem("jwtToken", token);
            SessionUtil.setAuthToken(token);
            const decoded = jwt_decode(token);


            dispatch(loginUser(decoded))
        })
        .catch(err => {
            dispatch(sessionErrors(err))
        });
}

export const login = (user: any) => async (dispatch: Dispatch) => {
    // return(
    // await SessionUtil.login(user)
    //     .then(res => {
    //         const { token } = res.data;
    //         localStorage.setItem('jwtToken', token);
    //         SessionUtil.setAuthToken(token);
    //         const decoded = jwt_decode(token);
    //         dispatch(loginUser(decoded));
    //     } )
    //     .catch(err => {
    //         dispatch(sessionErrors(err))
    //     }))
    try {

    } catch(e)
};

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