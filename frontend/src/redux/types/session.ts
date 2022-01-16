import ActionTypes from "../actions/types";

export type LoginInfo = {
    id: any,
    email: string,
    password: string
};

export type RegisterInfo = {
    id: any,
    email: string,
    passsword: string,
    companyName: string,
};

export type SessionErrors = {
    errors: []
}



interface ILoginUser {
    type: typeof ActionTypes.LOGIN_USER,
    payload: LoginInfo
    
};

interface ILogoutUser {
    type: typeof ActionTypes.LOGOUT_USER
};

interface ISessionErrors {
    type: typeof ActionTypes.SESSION_ERRORS,
};

interface IClearSessionErrors {
    type: typeof ActionTypes.CLEAR_SESSION_ERRORS
};

export type SessionActions = 
    | ILoginUser 
    | ILogoutUser
    | ISessionErrors
    | IClearSessionErrors


