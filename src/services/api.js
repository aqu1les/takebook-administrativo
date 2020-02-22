import axios from 'axios';

export const API_URL = 'http://10.0.0.8:8000';

const api = axios.create({
    baseURL: API_URL
});

api.interceptors.request.use(config => {
    const token = sessionStorage.getItem('authKey');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

api.interceptors.response.use(
    response => response,
    err => {
        if (err.response) {
            const { status, data } = err.response;
            if (status === 401) {
                if (data.error === 'Incorrect Password')
                    return 'Senha Inválida!';
                else if (data.error === 'User not found')
                    return 'E-mail inválido!';
                localStorage.removeItem('user_info');
                sessionStorage.removeItem('authKey');
                return (window.location.pathname = '/login');
            }
            return err.response;
        }
    }
);

export default api;

