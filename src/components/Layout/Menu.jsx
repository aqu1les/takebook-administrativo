import React from "react";
import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

const Menu = styled.aside`
    grid-area: menu;
    width: 100%;
    transition: width 300ms;
    transition-timing-function: ease;
    display: flex;
    flex-direction: column;
    background-color: #01588c;
    align-items: center;
    a {
        text-decoration: none;
        color: #fff;
        height: 50px;
        width: 100%;
        display: flex;
        align-items: center;
        &:visited {
            color: #fff;
        }
        &:hover {
            background-color: #005b91;
        }
        svg {
            margin-left: 25px;
        }
        p {
            margin-left: 25px;
        }
    }
    a.active {
        background-color: #004066;
    }
    ${props =>
        props.show === false &&
        css`
            width: 0;
            display: none;
        `}
`;

export default props => {
    const { show } = props;
    return (
        <Menu show={show}>
            <NavLink to="/dashboard" activeClassName="active">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#FFFFFF"
                >
                    <path d="M21 13v10h-6v-6h-6v6h-6v-10h-3l12-12 12 12h-3zm-1-5.907v-5.093h-3v2.093l3 3z" />
                </svg>
                <p>Página Inicial</p>
            </NavLink>
            <NavLink to="/users" activeClassName="active">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#FFFFFF"
                >
                    <path d="M19 7.001c0 3.865-3.134 7-7 7s-7-3.135-7-7c0-3.867 3.134-7.001 7-7.001s7 3.134 7 7.001zm-1.598 7.18c-1.506 1.137-3.374 1.82-5.402 1.82-2.03 0-3.899-.685-5.407-1.822-4.072 1.793-6.593 7.376-6.593 9.821h24c0-2.423-2.6-8.006-6.598-9.819z" />
                </svg>
                <p>Usuários</p>
            </NavLink>
            <NavLink to="/adverts" activeClassName="active">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#FFFFFF"
                >
                    <path d="M2.655 15.423c-.835.892-1.542 1.158-2.655.86l2.647 4.585c.257-1.094.815-1.708 2.005-1.985l15.348-3.732-6.335-10.972-11.01 11.244zm11.32 2.707l-.467 2.118c-.094.378-.391.674-.769.771l-2.952.774c-.365.095-.753-.012-1.018-.28l-1.574-1.712 1.605-.395.646.77c.176.177.432.248.674.186l1.598-.425c.252-.064.449-.261.511-.512l.162-.906 1.584-.389zm8.719-11.267l-2.684 1.613-.756-1.262 2.686-1.612.754 1.261zm-4.396-1.161l-1.335-.616 1.342-2.914 1.335.617-1.342 2.913zm5.619 6.157l-3.202-.174.081-1.469 3.204.175-.083 1.468z" />
                </svg>
                <p>Anúncios</p>
            </NavLink>
            <NavLink to="/reports" activeClassName="active">
                <svg
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="#FFFFFF"
                >
                    <path d="M4 17.98h-4v-16.981h24v16.981h-13l-7 5.02v-5.02zm8-5.48c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25-1.25-.56-1.25-1.25.56-1.25 1.25-1.25zm1-8.5h-2v7h2v-7z" />
                </svg>
                <p>Denúncias</p>
            </NavLink>
        </Menu>
    );
};
