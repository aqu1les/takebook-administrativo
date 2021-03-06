import React, { useState, useContext } from 'react';
import { useDispatch } from 'react-redux';
import api from '../../services/api';
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
    UserIcon,
} from './style';
import user from '../../assets/icons/user.svg';
import logo from '../../assets/book-app.png';
import passwordIcon from '../../assets/icons/password.svg';
import emailIcon from '../../assets/icons/email.svg';
import { setUserAction } from '../../redux/Actions/auth';
import * as serviceWorker from '../../serviceWorker';
import { setNotificationsAction } from '../../redux/Actions/notifications';
import { EMAIL_REGEX } from '../../utils/Constants';
import { PopupContext } from '../../components/Popup/Context';

export default function Login() {
    const dispatch = useDispatch();
    const { notifyError, notifySuccess } = useContext(PopupContext);
    const [isLoading, setIsLoading] = useState(false);
    const [form, setForm] = useState({ email: '', password: '' });
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorPassword, setErrorPassword] = useState(false);

    function handleInputChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
        if (e.target.name === 'email') {
            return !EMAIL_REGEX.test(e.target.value)
                ? setErrorEmail(true)
                : setErrorEmail(false);
        } else if (e.target.name === 'password') {
            return e.target.value.length < 5
                ? setErrorPassword(true)
                : setErrorPassword(false);
        }
    }

    function handleKeyPress(e) {
        if (e.key === 'Enter') return handleSubmitLogin(e);
    }

    async function handleSubmitLogin(e) {
        e.preventDefault();
        if (!form.password) return setErrorPassword(true);
        if (!form.email) return setErrorEmail(true);
        setIsLoading(true);
        try {
            const response = await api.post('/admin/auth/login', form);
            if (!response) {
                notifyError('Erro no servidor!');
                return setIsLoading(false);
            } else if (response === 'Senha Inválida!') {
                notifyError('Senha inválida!');
                setIsLoading(false);
                return setErrorPassword(true);
            } else if (response === 'E-mail inválido!') {
                notifyError('E-mail inválido!');
                setIsLoading(false);
                return setErrorEmail(true);
            }
            localStorage.setItem(
                'user_info',
                JSON.stringify({
                    ...response.data.user,
                    token: response.data.token,
                })
            );
            serviceWorker.register();
            dispatch(setNotificationsAction(response.data.user.notifications));
            setTimeout(() => {
                dispatch(
                    setUserAction({
                        ...response.data.user,
                        token: response.data.token,
                    })
                );
            }, 2000);
            return notifySuccess('Logando...');
        } catch (error) {
            notifyError('Erro ao contactar o servidor!');
            return setIsLoading(false);
        }
    }

    return (
        <Wrapper>
            <CardAuth>
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
                            onChange={handleInputChange}
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
                            onChange={handleInputChange}
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
                            !form.password ||
                            isLoading
                        }
                    >
                        ENVIAR
                    </SendButton>
                </Form>
            </CardAuth>
        </Wrapper>
    );
}
