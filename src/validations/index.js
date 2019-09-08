import api from '../services/api';
import jwt from 'jsonwebtoken';

export async function checkAuth() {
    const token = localStorage.getItem('authKey');
    if (!token) return false;
    try {
        const test = await jwt.verify(token, 'yNFyPzaSLyonAPnt0tVZZUHbZbrHtAZC');
        if (!test) return false;
        const response = await api.get(`/users/me`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('authKey')}`
            }
        });
        return response ? true : false;
    } catch (err) {
        console.log(err);
        return false;
    }
}