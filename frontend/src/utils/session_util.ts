import axios from 'axios';

export const setAuthToken = (token: string): void => {
    if (token) {
        axios.defaults.headers.common['Authorization'] = token;
    } else {
        delete axios.defaults.headers.common['Authorizations'];
    }
};

export const signup = (user: any) => {
    return axios.post('/api/users/register', user);
};

export const login = (user: any) => {
    return axios.post('/api/users/login', user);
};

