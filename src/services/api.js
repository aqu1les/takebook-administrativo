import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8000"
});

api.interceptors.request.use(config => {
    const token = sessionStorage.getItem("authKey");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

api.interceptors.response.use(response => response,
    err => {
        if (err.response) {
            const { status, data } = err.response;
            if (status === 401) {
                if (data.error === "Incorrect Password") return "Senha Inválida!";
                else if (data.error === "User not found") return "E-mail inválido!";
                localStorage.removeItem("user_info");
                sessionStorage.removeItem("authKey");
                return window.location.pathname = "/login";
            }
            return err.response;
        }
    });

export default api;