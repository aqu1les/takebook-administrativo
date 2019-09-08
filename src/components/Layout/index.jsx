import React, { Component } from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import Menu from "./Menu";

export default class layout extends Component {
    state = {
        open: true
    };
    handleMenu = () => {
        return this.setState({ open: this.state.open ? false : true });
    };
    render() {
        const Layout = styled.div`
            display: grid;
            min-height: 100%;
            grid-template-columns: ${this.state.open ? "240px" : "80px"} 1fr;
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

        return (
            <Layout>
                <Header handleMenu={this.handleMenu} />
                <Menu show={this.state.open} />
                <Main>{this.props.children}</Main>
                <Footer />
            </Layout>
        );
    }
}
