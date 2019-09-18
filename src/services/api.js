import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8000'
});

api.interceptors.request.use(config => {
    const token = sessionStorage.getItem('authKey');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

api.interceptors.response.use(response => response,
    error => {
        const { status } = error.response;
        if (status === 401) {
            return window.location.pathname = '/login';
        }
    });

export default api;