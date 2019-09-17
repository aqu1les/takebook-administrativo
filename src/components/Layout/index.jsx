import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import Menu from "./Menu";
import { checkAuth, getToken } from "../../validations";

class layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authenticated: getToken() ? true : false
        };
    }
    shouldComponentUpdate(nextProps, nextState) {
        return (
            this.props.children.type !== nextProps.children.type ||
            this.state.authenticated !== nextState.authenticated
        );
    }
    componentDidMount() {
        this.checkAuthentication();
    }
    checkAuthentication = async () => {
        const checked = await checkAuth();
        if (!checked) return this.setState({ authenticated: false });
    };
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
