export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const SESSION_ERRORS = "SESSION_ERRORS";
export const CLEAR_SESSION_ERRORS = "CLEAR_SESSION_ERRORS";

export type LoginInfo = {
    id: any,
    email: string,
    passsword: string
};

export type RegisterInfo = {
    id: any,
    email: string,
    passsword: string,
    companyName: string,
};



type SessionErrorsArr = {
    errors: []
};

interface ILoginUser {
    type: typeof LOGIN_USER,
    payload: { currentUser: LoginInfo}
};

interface ILogoutUser {
    type: typeof LOGOUT_USER
};

interface ISessionErrors {
    type: typeof SESSION_ERRORS
    payload: SessionErrorsArr
};

interface IClearSessionErrors {
    type: typeof CLEAR_SESSION_ERRORS
};



// const loginUser = currentUser => {
//     return {
//         type: LOGIN_USER,
//         currentUser
//     }
// };

// const logoutUser = () => {
//     return {
//         type: LOGOUT_USER
//     }
// };

// const sessionErrors = errors => {
//     return {
//         type: SESSION_ERRORS,
//         errors
//     }
// };

// const clearSessionErrors = () => {
//     return {
//         type: CLEAR_SESSION_ERRORS
//     }
// };