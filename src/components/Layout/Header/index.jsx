import React, { Component } from "react";
import { NavLink, Redirect } from "react-router-dom";
import menuIcon from "../../../assets/icons/menu.svg";
import notificationIcon from "../../../assets/icons/notifications.svg";
import logo from "../../../assets/logo.svg";
import defaultProfile from "../../../assets/icons/profile-user.svg";
import { Header } from "./styles";

export default class header extends Component {
    state = {
        logout: false,
        profile: false
    };
    logout = () => {
        sessionStorage.removeItem("authKey");
        return this.setState({ logout: true });
    };
    handleRedirectProfile = () => {
        return this.setState({ profile: true });
    };
    handleProfileClick = () => {
        const main = document.getElementById("main");
        return main.scrollTo({ top: 0 });
    };
    handleMenu = () => {
        const layout = document.getElementById("Layout");
        const menuTexts = document.querySelectorAll("aside>a>p");
        if (
            getComputedStyle(layout).gridTemplateColumns.split(" ")[0] ===
            "240px"
        ) {
            layout.style.gridTemplateColumns = "80px 1fr";
            menuTexts.forEach(li => {
                li.style.display = "none";
            });
        } else if (
            getComputedStyle(layout).gridTemplateColumns.split(" ")[0] ===
            "80px"
        ) {
            layout.style.gridTemplateColumns = "240px 1fr";
            menuTexts.forEach(li => {
                li.style.display = "block";
            });
        }
    };
    render() {
        if (this.state.profile) return <Redirect to="/me" />;
        else if (this.state.logout) return <Redirect to="/login" />;
        else {
            return (
                <Header>
                    <nav role="navigation">
                        <div id="initial-part">
                            <button onClick={this.handleMenu}>
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
                            <div
                                id="dropdown"
                                onClick={this.handleProfileClick}
                            >
                                <button
                                    id="userOptions"
                                    onClick={this.handleProfileClick}
                                >
                                    <img
                                        src={defaultProfile}
                                        alt="Foto padrão dos usuários"
                                        title="Imagem do usuário"
                                        onClick={this.handleProfileClick}
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
