import React, { Component } from "react";
import { NavLink } from "react-router-dom";
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
            width: 33%;
            height: 100%;
            justify-content: center;
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
                min-width: initial;
                display: none;
            }
        }
        #mid-part {
            justify-content: center;
            a {
                width: 50px;
                height: 50px;
            }
        }
        #end-part {
            justify-content: flex-end;
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
                &:focus {
                    outline: none;
                    border: none;
                }
            }
            @media only screen and (max-width: 576px) {
                justify-content: space-around;
            }
        }
    }
`;

export default class header extends Component {
    render() {
        return (
            <Header>
                <nav>
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
                            <img src={logo} alt="Ícone logo do aplicativo" />
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
                        <button id="userOptions" onClick={() => {}}>
                            <img
                                src={defaultProfile}
                                alt="Foto padrão dos usuários"
                                width="24"
                                height="24"
                            />
                        </button>
                    </div>
                </nav>
            </Header>
        );
    }
}
