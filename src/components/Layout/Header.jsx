import React, { Component } from "react";
import { NavLink, Redirect } from "react-router-dom";
import styled from "styled-components";
import menuIcon from "../../assets/icons/menu.svg";
import notificationIcon from "../../assets/icons/notifications.svg";
import logo from "../../assets/logo.svg";
import defaultProfile from "../../assets/icons/profile-user.svg";

const Header = styled.header`
    height: 62px;
    background-color: #024973;
    margin-bottom: 20px;
    width: 100vw;
    grid-area: header;
    @media only screen and (max-width: 576px) {
        height: 50px;
        background-color: #024973;
        position: fixed;
        top: 0;
    }
    nav {
        height: 100%;
        margin-left: auto;
        margin-right: 10px;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        div {
            display: flex;
            align-items: center;
            height: 100%;
        }
        #initial-part {
            justify-content: flex-start;
            min-width: 320px;
            button {
                background-color: unset;
                border: none;
                cursor: pointer;
                margin-left: 20px;
                margin-right: 20px;
                &:focus {
                    outline: none;
                    border: none;
                }
            }

            @media only screen and (max-width: 576px) {
                display: none;
            }
        }
        #mid-part {
            justify-content: center;
            justify-self: center;
            a {
                width: 50px;
                height: 50px;
            }
            @media only screen and (max-width: 576px) {
                margin-left: 25px;
            }
        }
        #dropdown-content {
            display: none;
            position: absolute;
            background-color: #f9f9f9;
            min-width: 160px;
            box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
            padding: 12px 16px;
            z-index: 1;
        }
        #dropdown-content:hover {
            display: block;
        }
        #end-part {
            justify-content: flex-end;
            button {
                margin: 10px;
            }
            #dropdown {
                position: relative;
            }
            #dropdown-content {
                display: none;
                position: absolute;
                background-color: #f9f9f9;
                min-width: 130px;
                box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
                padding: 6px 16px;
                z-index: 1;
                right: 10px;
                top: 50px;
                list-style: none;
                color: #000;
                li {
                    margin: 8px;
                    cursor: pointer;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    &:hover {
                        opacity: 0.5;
                    }
                }
            }

            #dropdown:hover #dropdown-content {
                display: block;
            }
            #btnImg {
                background-color: unset;
                border: none;
                cursor: pointer;
                &:focus {
                    outline: none;
                    border: none;
                }
            }
            #userOptions {
                background-color: unset;
                border: none;
                cursor: pointer;
                margin-right: 20px;
                &:focus {
                    outline: none;
                    border: none;
                }
                img {
                    width: 30px;
                    height: 30px;
                    &:hover {
                        box-shadow: 1px 1px 4px 1px rgba(0, 0, 0, 0.2);
                        border-radius: 50px;
                        opacity: 0.8;
                    }
                }
            }
            @media only screen and (max-width: 576px) {
                justify-content: space-around;
            }
        }
    }
`;

export default class header extends Component {
    state = {
        redirect: false,
        profile: false
    };

    logout = () => {
        localStorage.removeItem("authKey");
        return this.setState({ redirect: true });
    };
    handleRedirectProfile = () => {
        return this.setState({ profile: true });
    };
    render() {
        if (this.state.profile) return <Redirect to="/me" />;
        else if (this.state.redirect) return <Redirect to="/auth" />;
        else {
            return (
                <Header>
                    <nav role="navigation">
                        <div id="initial-part">
                            <button onClick={this.props.handleMenu}>
                                <img
                                    src={menuIcon}
                                    alt="Ícone para abrir/fechar o menu"
                                    width="24"
                                    height="24"
                                />
                            </button>
                            <h2 id="section">Painel do administrador</h2>
                        </div>
                        <div id="mid-part">
                            <NavLink to="/dashboard">
                                <img
                                    src={logo}
                                    alt="Ícone logo do aplicativo"
                                />
                            </NavLink>
                        </div>
                        <div id="end-part">
                            <button id="btnImg">
                                <img
                                    src={notificationIcon}
                                    alt="Ícone de notificação"
                                    width="20"
                                    height="20"
                                />
                            </button>
                            <div id="dropdown">
                                <button id="userOptions" onClick={() => {}}>
                                    <img
                                        src={defaultProfile}
                                        alt="Foto padrão dos usuários"
                                        title="Imagem do usuário"
                                    />
                                </button>
                                <ul id="dropdown-content">
                                    <li onClick={this.handleRedirectProfile}>
                                        Perfil
                                    </li>
                                    <hr />
                                    <li onClick={this.logout}>
                                        Sair
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M16 9v-4l8 7-8 7v-4h-8v-6h8zm-16-7v20h14v-2h-12v-16h12v-2h-14z" />
                                        </svg>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </Header>
            );
        }
    }
}
