import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import Menu from "./Menu";

class layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authenticated: sessionStorage.getItem("authKey") ? true : false
        };
    }
    render() {
        const Layout = styled.div`
            display: grid;
            min-height: 100vh;
            grid-template-columns: 240px 1fr;
            max-width: 100vw;
            grid-template-rows: 62px 1fr 52px;
            grid-template-areas: "header header" "menu main" "menu footer";
            @media only screen and (max-width: 576px) {
                grid-template-columns: 60px 1fr;
                grid-template-rows: 50px 1fr 50px;
                grid-template-areas: "header header" "main main" "menu menu";
                max-height: 100%;
            }
        `;
        const Main = styled.main`
            grid-area: main;
            margin: 20px 10px 20px 20px;
            padding: 15px;
            max-width: 100vw;
            & > div {
                height: 100%;
            }
            @media only screen and (max-width: 576px) {
                padding: 0;
                overflow: scroll;
            }
        `;

        if (this.state.authenticated) {
            return (
                <Layout id="Layout">
                    <Header handleMenu={this.handleMenu} />
                    <Menu show={this.state.open} />
                    <Main id="main">{this.props.children}</Main>
                    <Footer />
                </Layout>
            );
        } else {
            return <Redirect to="/login" />;
        }
    }
}

export default layout;
