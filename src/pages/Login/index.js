import React, { Component, useState } from "react";
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

export default function Login() {
    const [notify, setNotify] = useState({ show: false });
    function notifyError(msg) {
        setNotify({
            show: true,
            notificationMessage: msg,
            variant: "danger"
        });
        setTimeout(() => {
            setNotify({ show: false });
        }, 3000);
    }
    function notifySuccess(msg) {
        setNotify({
            show: true,
            notificationMessage: msg,
            variant: "success"
        });
        setTimeout(() => {
            setNotify({ show: false });
        }, 3000);
    }
    return (
        <Wrapper>
            <CardAuth>
                <PopUp show={notify.show} msg={notify.notificationMessage} variant={notify.variant} />
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
                        <Input id="email_input" name="email" type="email" onChange={this.handleChange} placeholder="Digite aqui seu e-mail" required={true} autoFocus={true} />
                    </FormGroup>
                    <FormGroup error={this.state.passwordError}>
                        <label htmlFor="password_input"><img src={passwordIcon} alt="Ícone da senha" /></label>
                        <Input id="password_input" name="password" type="password" required={true} onChange={this.handleChange} placeholder="Digite aqui a sua senha" onKeyPress={this.handleKeyPress} />
                    </FormGroup>
                    <SendButton id="send_button" onClick={this.handleSubmitLogin}>ENVIAR</SendButton>
                </Form>
            </CardAuth>
        </Wrapper>
    );
}
/*export default class Login extends Component {
    state = {
        email: "",
        password: "",
        authenticated: false,
        disabled: true,
        loading: false,
        emailError: false,
        passwordError: false,
        notify: {}
    }
    handleSubmitLogin = async e => {
        e.preventDefault();
        this.setState({ loading: true });

        if (!this.state.email && !this.state.password) {
            this.notifyError("Preencha os campos!");
            return this.setState({ emailError: true, passwordError: true, loading: false });
        }
        if (!this.state.email) {
            this.notifyError("Digite o e-mail");
            return this.setState({ emailError: true, loading: false });
        }
        if (!this.state.password) {
            this.notifyError("Digite a senha");
            return this.setState({ passwordError: true, loading: false });
        }

        this.setState({ emailError: false, passwordError: false });

        const response = await api.post("/admin/auth/login", {
            email: this.state.email,
            password: this.state.password
        });
        if (!response) {
            this.notifyError("Erro no servidor!");
            return this.setState({ loading: false });
        }
        else if (response === "Senha Inválida!") {
            this.notifyError("Senha inválida!");
            return this.setState({ passwordError: true, loading: false });
        } else if (response === "E-mail inválido!") {
            this.notifyError("E-mail inválido!");
            return this.setState({ emailError: true, loading: false });
        }
        this.notifySuccess("Logando...");
        sessionStorage.setItem("authKey", response.data.token);
        delete (response.data.token);
        localStorage.setItem("user_info", JSON.stringify(response.data.user));
        setTimeout(() => {
            if (response.data) return this.setState({ authenticated: true });
        }, 3000);

    }

    handleChange = e => {
        return this.setState({ [e.target.name]: e.target.value });
    }
    handleKeyPress = e => {
        if (e.key === "Enter") {
            return this.handleSubmitLogin(e);
        }
    }
    notifyError(msg) {
        this.setState({ notify: { show: true, notificationMessage: msg, variant: "danger" } });
        setTimeout(() => {
            this.setState({ notify: false });
        }, 3000);
    }
    notifySuccess(msg) {
        this.setState({
            notify: {
                show: true,
                notificationMessage: msg,
                variant: "success"
            }
        });
        setTimeout(() => {
            this.setState({ notify: false });
        }, 3000);
    }
    render() {
        return this.state.authenticated ? <Redirect to="/dashboard" /> :
            <Wrapper>
                <CardAuth>
                    <PopUp show={this.state.notify.show} msg={this.state.notify.notificationMessage} variant={this.state.notify.variant} />
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
                            <Input id="email_input" name="email" type="email" onChange={this.handleChange} placeholder="Digite aqui seu e-mail" required={true} autoFocus={true} />
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
*/