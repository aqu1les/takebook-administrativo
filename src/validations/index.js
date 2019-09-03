import api from '../services/api';

export async function checkAuth() {
    const token = localStorage.getItem('authKey');
    if (!token) return false;
    const response = await api.get(`/users/me`);
    return response ? true : false;
}