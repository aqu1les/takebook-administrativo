import React from "react";
import Header from "./Header";
import Menu from "./Menu";
import styled from "styled-components";
import topRight from "../../assets/login/top-right.svg";
import leftBottom from "../../assets/login/left-bottom.svg";

export default function Layout(props) {
    return (
        <Wrapper>
            <Header />
            <Menu />
            <Main>{props.children}</Main>
        </Wrapper>
    );
}
const Main = styled.main`
    height: 100%;
    background-image: url(${topRight}), url(${leftBottom});
    background-position: right top, left bottom;
    background-size: 300px, 280px;
    background-repeat: no-repeat;
    flex-grow: 100;
    & > div {
        margin-top: 50px;
        margin-right: 30px;
        margin-left: 30px;
        margin-bottom: 20px;
        flex-grow: 100;
        height: calc(100vh - 70px);
        @media only screen and (max-width: 576px) {
            margin: 70px 0 0 0;
            padding: 5px;
            max-width: 100vw;
            height: calc(100vh - 140px);
        }
    }
    @media only screen and (max-width: 576px) {
        background-size: 250px, 140px;
        height: 100vh;
        max-width: 100vw;
    }
`;
const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    height: 100vh;
    width: 100vw;
    background-color: #fff;
`;
