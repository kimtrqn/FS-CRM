export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const SESSION_ERRORS = "SESSION_ERRORS";
export const CLEAR_SESSION_ERRORS = "CLEAR_SESSION_ERRORS";


interface LoginUser {
    type: typeof LOGIN_USER
};



const loginUser = currentUser => {
    return {
        type: LOGIN_USER,
        currentUser
    }
};

const logoutUser = () => {
    return {
        type: LOGOUT_USER
    }
};

const sessionErrors = errors => {
    return {
        type: SESSION_ERRORS,
        errors
    }
};

const clearSessionErrors = () => {
    return {
        type: CLEAR_SESSION_ERRORS
    }
};