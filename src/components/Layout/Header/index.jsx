import React, { Component } from "react";
import { Redirect, NavLink } from "react-router-dom";
import notificationIcon from "../../../assets/icons/notifications.svg";
import defaultProfile from "../../../assets/icons/defaultProfile.svg";
import { Header } from "./style";

export default class header extends Component {
    state = {
        logout: false,
        user_name: ""
    };
    componentDidMount() {
        const user = JSON.parse(localStorage.getItem("user_info"));
        const userName = `${user.first_name} ${user.last_name.substring(
            0,
            1
        )}.`;
        this.setState({ user_name: userName });
        document
            .querySelector("main")
            .addEventListener("mousedown", this.handleClickOutside);
        document
            .querySelector("aside")
            .addEventListener("mousedown", this.handleClickOutside);
    }
    componentWillUnmount() {
        document
            .querySelector("main")
            .addEventListener("mousedown", this.handleClickOutside);
        document
            .querySelector("aside")
            .addEventListener("mousedown", this.handleClickOutside);
    }
    logout = () => {
        sessionStorage.removeItem("authKey");
        localStorage.removeItem("user_info");
        return this.setState({ logout: true });
    };
    handleRedirectProfile = () => {
        return this.setState({ profile: true });
    };
    handleDropdown = () => {
        const dropdown = document.getElementById("dropdown-content");
        dropdown.classList.toggle("open");
    };
    handleClickOutside = () => {
        const dropdown = document.getElementById("dropdown-content");
        dropdown.classList.forEach(c => {
            if (c === "open") {
                dropdown.classList.remove("open");
            }
        });
    };
    render() {
        if (this.state.logout) return <Redirect to="/login" />;
        else {
            return (
                <Header>
                    <nav role="navigation">
                        <img
                            src={notificationIcon}
                            alt="Ícone de notificação"
                            width="20"
                            height="20"
                            id="btnNotification"
                        />
                        <div id="dropdown" onClick={this.handleDropdown}>
                            <h5>{this.state.user_name}</h5>
                            <i className="arrow-down"></i>
                        </div>
                        <ul id="dropdown-content">
                            <li onClick={this.handleRedirectProfile}>
                                <NavLink to="/me">Perfil</NavLink>
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
                        <img
                            src={defaultProfile}
                            alt="Foto padrão dos usuários"
                            title="Imagem do usuário"
                            id="ProfilePic"
                        />
                    </nav>
                </Header>
            );
        }
    }
}
