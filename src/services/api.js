import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8000',
    headers: {
        Authorization: `Bearer ${localStorage.getItem('authKey')}`
    }
});

export default api;