import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import {
    Wrapper,
    CardAuth,
    Divider,
    LogoImg,
    Logo,
    AppName,
    Form,
    FormGroup,
    Input,
    SendButton,
    UserIcon
} from "./style";
import api from "../../services/api";
import user from "../../assets/icons/user.svg";
import logo from "../../assets/book-app.png";
import passwordIcon from "../../assets/icons/password.svg";
import emailIcon from "../../assets/icons/email.svg";
import PopUp from '../../components/Popup';

class Login extends Component {
    state = {
        email: "",
        password: "",
        authenticated: false,
        disabled: true,
        loading: false,
        emailError: false,
        passwordError: false,
        notify: false,
        notificationMessage: ''
    }
    handleSubmitLogin = async e => {
        e.preventDefault();
        this.setState({ loading: true });

        if (!this.state.email && !this.state.password) return this.setState({ emailError: true, passwordError: true, loading: false });
        if (!this.state.email) return this.setState({ emailError: true, loading: false });
        if (!this.state.password) return this.setState({ passwordError: true, loading: false });

        this.setState({ emailError: false, passwordError: false });

        const response = await api.post("/admin/auth/login", {
            email: this.state.email,
            password: this.state.password
        });

        if (response === "Senha Inválida!") {
            this.notify("Senha inválida!");
            return this.setState({ passwordError: true, loading: false });
        } else if (response === "E-mail inválido!") {
            this.notify("E-mail inválido!");
            return this.setState({ emailError: true, loading: false });
        }
        sessionStorage.setItem("authKey", response.data.token);
        delete (response.data.token);
        localStorage.setItem("user_info", JSON.stringify(response.data.user));
        if (response.data) return this.setState({ authenticated: true });
    }

    handleChange = e => {
        return this.setState({ [e.target.name]: e.target.value });
    }
    handleKeyPress = e => {
        if (e.key === "Enter") {
            return this.handleSubmitLogin(e);
        }
    }
    notify(msg) {
        this.setState({ notify: true, notificationMessage: msg });
        setTimeout(() => {
            this.setState({ notify: false });
        }, 3000);
    }
    render() {
        return this.state.authenticated ? <Redirect to="/dashboard" /> :
            <Wrapper>
                <CardAuth>
                    <PopUp show={this.state.notify} msg={this.state.notificationMessage} />
                    <LogoImg submiting={this.state.loading}>
                        <Logo src={logo} alt="Livro logo TAKEBOOK" width="200" height="200" />
                        <AppName src={logo} alt="Livro logo TAKEBOOK" />
                    </LogoImg>
                    <Divider />
                    <Form>
                        <UserIcon src={user} alt="Ícone de usuário" />
                        <h2>Login</h2>
                        <FormGroup error={this.state.emailError}>
                            <label htmlFor="email_input"><img src={emailIcon} alt="Ícone do e-mail" /></label>
                            <Input id="email_input" name="email" type="email" onChange={this.handleChange} placeholder="Digite aqui seu e-mail" required={true} />
                        </FormGroup>
                        <FormGroup error={this.state.passwordError}>
                            <label htmlFor="password_input"><img src={passwordIcon} alt="Ícone da senha" /></label>
                            <Input id="password_input" name="password" type="password" required={true} onChange={this.handleChange} placeholder="Digite aqui a sua senha" onKeyPress={this.handleKeyPress} />
                        </FormGroup>
                        <SendButton id="send_button" onClick={this.handleSubmitLogin}>ENVIAR</SendButton>
                    </Form>
                </CardAuth>
            </Wrapper>
    }
}

export default Login;
