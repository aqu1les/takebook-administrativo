import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import notificationIcon from "../../../assets/icons/notifications.svg";
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
	handleDropdown = () => {
		const dropdown = document.getElementById("dropdown-content");
		dropdown.classList.toggle("open");
	};
	render() {
		const show = window.location.pathname === "/login" ? false : true;
		if (this.state.profile) return <Redirect to="/me" />;
		else if (this.state.logout) return <Redirect to="/login" />;
		else {
			return (
				<Header show={show}>
					<nav role="navigation">
						<img
							src={notificationIcon}
							alt="Ícone de notificação"
							width="20"
							height="20"
							id="btnNotification"
						/>
						<div id="dropdown" onClick={this.handleDropdown}>
							<h5>Nome S.</h5>
							<i className="arrow-down"></i>
						</div>
						<ul
							id="dropdown-content"
							onMouseLeave={this.handleDropdown}
						>
							<li onClick={this.handleRedirectProfile}>Perfil</li>
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
