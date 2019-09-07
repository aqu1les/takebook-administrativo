import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import menuIcon from "../../assets/icons/menu.svg";
import notificationIcon from "../../assets/icons/notifications.svg";
import logo from "../../assets/logo.svg";

const Header = styled.header`
    height: 62px;
    background-color: #024973;
    margin-bottom: 20px;
    width: 100%;
    grid-area: header;
    nav {
        height: 100%;
        margin-left: auto;
        margin-right: 10px;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: space-between;
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
                h2 {
                    display: none;
                }
            }
        }
        #mid-part {
            justify-content: center;
        }
        #end-part {
            justify-content: flex-end;
            margin-right: 10px;
            #btnImg {
                background-color: unset;
                border: none;
                cursor: pointer;
                &:focus {
                    outline: none;
                    border: none;
                }
            }
        }
        a {
            width: 50px;
            height: 50px;
        }
    }
`;

export default class header extends Component {
    state = {
        dropdownOpen: false
    };
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
                        <button
                            id="btnImg"
                            onClick={() =>
                                this.setState({ dropdownOpen: true })
                            }
                        >
                            <img
                                src={notificationIcon}
                                alt="Ícone de notificação"
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
