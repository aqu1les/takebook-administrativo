import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from './style.js';
import logo from '../../../assets/Takebook.svg';
import mainIcon from '../../../assets/icons/main.svg';
import adIcon from '../../../assets/icons/ad-icon.svg';
import userIcon from '../../../assets/icons/user-icon.svg';
import reportIcon from '../../../assets/icons/reports-icon.svg';
import requestIcon from '../../../assets/icons/request.svg';

export default function Aside() {
    return (
        <Menu>
            <div id="img">
                <img
                    src={logo}
                    alt="Ícone do aplicativo"
                    title="Ícone do aplicativo"
                />
            </div>
            <NavLink to="/dashboard" activeClassName="active">
                <img src={mainIcon} alt="" />
                <p>Página Inicial</p>
            </NavLink>
            <NavLink to="/users" activeClassName="active">
                <img src={userIcon} alt="" />
                <p>Usuários</p>
            </NavLink>
            <NavLink to="/adverts" activeClassName="active">
                <img src={adIcon} alt="" />
                <p>Anúncios</p>
            </NavLink>
            <NavLink to="/reports" activeClassName="active">
                <img src={reportIcon} alt="" />
                <p>Denúncias</p>
            </NavLink>
            <NavLink to="/requests" activeClassName="active">
                <img src={requestIcon} alt="" />
                <p>Solicitações</p>
            </NavLink>
        </Menu>
    );
}
