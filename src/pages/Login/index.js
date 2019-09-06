import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { checkAuth } from '../../validations';
import './styles.css';
import api from '../../services/api';
import logo from '../../assets/book-app.png';
import appName from '../../assets/takebook-name-only.png';

class Login extends Component {
    async componentDidMount() {
        const checked = await checkAuth();
        return this.setState({ authenticated: checked });
    }

    state = {
        email: '',
        password: '',
        authenticated: false
    }

    handleSubmitLogin = async e => {
        e.preventDefault();
        const response = await api.post('/admin/auth/login', {
            email: this.state.email,
            password: this.state.password
        });
        localStorage.setItem('authKey', response.data.token);
        return this.setState({ authenticated: true });
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }
    render() {
        return this.state.authenticated ? <Redirect to="/dashboard" /> :
            <div id="card-auth">
                <div id="logo-img">
                    <img id="logo" src={logo} alt="Livro logo TAKEBOOK" width="200" height="200" />
                    <img id="app-name" src={appName} alt="NOME TAKEBOOK" />
                </div>
                <div id="divider"></div>
                <form id="LoginForm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24"><path fill="#f58634" d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7.753 18.305c-.261-.586-.789-.991-1.871-1.241-2.293-.529-4.428-.993-3.393-2.945 3.145-5.942.833-9.119-2.489-9.119-3.388 0-5.644 3.299-2.489 9.119 1.066 1.964-1.148 2.427-3.393 2.945-1.084.25-1.608.658-1.867 1.246-1.405-1.723-2.251-3.919-2.251-6.31 0-5.514 4.486-10 10-10s10 4.486 10 10c0 2.389-.845 4.583-2.247 6.305z" /></svg>
                    <h2>Login</h2>
                    <div className="form-group">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.021 17.824c-3.907 0-6.021-2.438-6.021-5.586 0-3.363 2.381-6.062 6.638-6.062 3.107 0 5.362 2.019 5.362 4.801 0 4.356-5.165 5.506-4.906 3.021-.354.555-.927 1.177-2.026 1.177-1.257 0-2.04-.92-2.04-2.403 0-2.222 1.461-4.1 3.19-4.1.829 0 1.399.438 1.638 1.11l.232-.816h1.169c-.122.416-1.161 4.264-1.161 4.264-.323 1.333.675 1.356 1.562.648 1.665-1.29 1.75-4.664-.499-6.071-2.411-1.445-7.897-.551-7.897 4.347 0 2.806 1.976 4.691 4.914 4.691 1.719 0 2.771-.465 3.648-.974l.588.849c-.856.482-2.231 1.104-4.391 1.104zm-1.172-7.153c-.357.67-.588 1.538-.588 2.212 0 1.805 1.761 1.816 2.626.12.356-.697.586-1.586.586-2.265 0-1.458-1.748-1.717-2.624-.067z" /></svg>
                        <input name="email" type="email" onChange={this.handleChange} placeholder="Digite aqui seu e-mail" />
                    </div>
                    <div className="form-group">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M10 16c0-1.104.896-2 2-2s2 .896 2 2c0 .738-.404 1.376-1 1.723v2.277h-2v-2.277c-.596-.347-1-.985-1-1.723zm11-6v14h-18v-14h3v-4c0-3.313 2.687-6 6-6s6 2.687 6 6v4h3zm-13 0h8v-4c0-2.206-1.795-4-4-4s-4 1.794-4 4v4zm11 2h-14v10h14v-10z" /></svg>
                        <input name="password" type="password" minLength="6" onChange={this.handleChange} placeholder="Digite aqui a sua senha" />
                    </div>
                    <button id="button" type="button" onClick={this.handleSubmitLogin}>ENVIAR</button>
                </form>
            </div>
    }
}

export default Login;