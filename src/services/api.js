import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8000'
});

api.interceptors.request.use(async config => {
    const token = localStorage.getItem('authKey');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;