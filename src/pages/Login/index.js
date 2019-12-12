import React, { useState } from "react";
import { useDispatch } from "react-redux";
import api from "../../services/api";
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
import user from "../../assets/icons/user.svg";
import logo from "../../assets/book-app.png";
import passwordIcon from "../../assets/icons/password.svg";
import emailIcon from "../../assets/icons/email.svg";
import PopUp from "../../components/Popup";
import { setUserAction } from "../../redux/Actions/auth";

export default function Login() {
    // eslint-disable-next-line 
    const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const dispatch = useDispatch();
    const [notify, setNotify] = useState({ show: false });
    const [isLoading, setIsLoading] = useState(false);
    const [form, setForm] = useState({ email: "", password: "" });
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorPassword, setErrorPassword] = useState(false);

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
        if (e.target.name === "email") {
            return !EMAIL_REGEX.test(e.target.value)
                ? setErrorEmail(true)
                : setErrorEmail(false);
        } else if (e.target.name === "password") {
            return e.target.value.length < 5
                ? setErrorPassword(true)
                : setErrorPassword(false);
        }
    }
    function handleKeyPress(e) {
        if (e.key === "Enter") return handleSubmitLogin(e);
    }
    const handleSubmitLogin = async (e) => {
        e.preventDefault();
        if (!form.password) return setErrorPassword(true);
        if (!form.email) return setErrorEmail(true);
        setIsLoading(true);
        const response = await api.post("/admin/auth/login", form);
        if (!response) {
            notifyError("Erro no servidor!");
            return setIsLoading(false);
        } else if (response === "Senha Inválida!") {
            notifyError("Senha inválida!");
            setIsLoading(false);
            return setErrorPassword(true);
        } else if (response === "E-mail inválido!") {
            notifyError("E-mail inválido!");
            setIsLoading(false);
            return setErrorEmail(true);
        }
        setTimeout(() => {
            dispatch(setUserAction({ ...response.data.user, token: response.data.token }));
        }, 3000);
        return notifySuccess("Logando...");
    }
    function notifyError(msg) {
        setNotify({
            show: true,
            notificationMessage: msg,
            variant: "danger"
        });
        setTimeout(() => {
            setNotify({ show: false });
        }, 2000);
    }
    function notifySuccess(msg) {
        setNotify({
            show: true,
            notificationMessage: msg,
            variant: "success"
        });
        setTimeout(() => {
            setNotify({ show: false });
        }, 2000);
    }
    return (
        <Wrapper>
            <CardAuth>
                <PopUp
                    show={notify.show}
                    msg={notify.notificationMessage}
                    variant={notify.variant}
                />
                <LogoImg submiting={isLoading}>
                    <Logo
                        src={logo}
                        alt="Livro logo TAKEBOOK"
                        width="200"
                        height="200"
                    />
                    <AppName src={logo} alt="Livro logo TAKEBOOK" />
                </LogoImg>
                <Divider />
                <Form>
                    <UserIcon src={user} alt="Ícone de usuário" />
                    <h2>Login</h2>
                    <FormGroup error={errorEmail}>
                        <label htmlFor="email_input">
                            <img src={emailIcon} alt="Ícone do e-mail" />
                        </label>
                        <Input
                            id="email_input"
                            name="email"
                            type="email"
                            onChange={handleChange}
                            placeholder="Digite aqui seu e-mail"
                            required={true}
                            autoFocus={true}
                        />
                    </FormGroup>
                    <FormGroup error={errorPassword}>
                        <label htmlFor="password_input">
                            <img src={passwordIcon} alt="Ícone da senha" />
                        </label>
                        <Input
                            id="password_input"
                            name="password"
                            type="password"
                            required={true}
                            onChange={handleChange}
                            placeholder="Digite aqui a sua senha"
                            onKeyPress={handleKeyPress}
                        />
                    </FormGroup>
                    <SendButton
                        id="send_button"
                        onClick={handleSubmitLogin}
                        disabled={
                            errorEmail ||
                            errorPassword ||
                            !form.email ||
                            !form.password
                        }
                    >
                        ENVIAR
					</SendButton>
                </Form>
            </CardAuth>
        </Wrapper>
    );
}
