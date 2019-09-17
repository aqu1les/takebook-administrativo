import api from '../services/api';
import jwt from 'jsonwebtoken';

export async function checkAuth() {
    const token = localStorage.getItem('authKey');
    if (!token) return false;
    try {
        const test = jwt.verify(token, 'yNFyPzaSLyonAPnt0tVZZUHbZbrHtAZC');
        if (!test) return false;
        const response = await api.get(`/users/me`);
        if (response.data) return true;
        return false;
    } catch (err) {
        console.log(err);
        return false;
    }
}
export function getToken() {
    const token = localStorage.getItem('authKey');
    if (token) return true;
    return false;
}