import axios from 'axios';

export const setAuthToken = (token: string): void => {
    if (token) {
        axios.defaults.headers.common['Authorization'] = token;
    } else {
        delete axios.defaults.headers.common['Authorizations'];
    }
};

export const signup = (data: any) => {
    return axios.post('/api/users/register', data);
};

export const login = (data: any) => {
    return axios.post('/api/users/login', data);
};

