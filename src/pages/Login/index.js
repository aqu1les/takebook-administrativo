import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { checkAuth } from '../../validations';
import './styles.css';
import api from '../../services/api';
import logo from '../../assets/LOGO APP.svg';

class Login extends Component {
    async componentDidMount() {
        const checked = await checkAuth();
        if (checked) return this.setState({ authenticated: true });
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
            <form id="LoginForm">
                <div id="divimg">
                    <img src={logo} alt="Livro logo TAKEBOOK" width="100" height="100" />
                </div>
                <input name="email" type="email" onChange={this.handleChange} placeholder="Digite aqui seu e-mail" />
                <input name="password" type="password" minLength="6" onChange={this.handleChange} placeholder="Digite aqui a sua senha" />

                <button id="button" type="button" onClick={this.handleSubmitLogin}>ENVIAR</button>
            </form>
    }
}

export default Login;