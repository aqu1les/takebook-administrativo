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
        const body = this.state.open
            ? '"header header" "menu main" "menu footer"'
            : '"header header" "main main" "footer footer"';
        const Layout = styled.div`
            display: grid;
            min-height: 100%;
            grid-template-columns: 300px 1fr;
            grid-template-rows: 62px 1fr 52px;
            grid-template-areas: ${body};
        `;
        const Main = styled.main`
            grid-area: main;
            margin: 20px 20px 20px;
            padding: 15px;
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
