import React, { Component } from "react";
import styled from "styled-components";

export default class card extends Component {
    render() {
        const { icon, qtd, text, onClick } = this.props;
        if (qtd === "loading") {
            return (
                <LoadingCard>
                    <div className="lds-dual-ring"></div>
                </LoadingCard>
            );
        }
        return (
            <Card onClick={() => onClick()}>
                <div id="icon-div">
                    <img src={icon} alt="Ícone do card" />
                </div>
                <div id="content-div">
                    <div>{qtd}</div>
                    <div>{text}</div>
                </div>
            </Card>
        );
    }
}

const LoadingCard = styled.div`
    height: 160px;
    width: 32.5%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffaa01;
    color: #fff;
    box-shadow: 1px 1px 14px 1px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    transition: transform 200ms;
    cursor: pointer;
    padding-top: 5px;
    @media only screen and (max-width: 576px) {
        width: 33%;
        height: 80px;
        margin: 5px 0;
        .lds-dual-ring {
            width: 32px;
            height: 32px;
            &:after {
                width: 14px;
                height: 14px;
            }
        }
    }
`;
const Card = styled.div`
    height: 160px;
    width: 32.5%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background-color: #ffaa01;
    color: #fff;
    box-shadow: 1px 1px 14px 1px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    transition: transform 200ms;
    cursor: pointer;
    padding-top: 5px;
    &:hover {
        transform: scale(1.05);
    }
    #icon-div {
        display: flex;
        align-items: center;
        justify-content: center;
        img {
            width: 60px;
            height: 60px;
        }
    }
    #content-div {
        display: flex;
        flex-direction: column;
        width: 55%;
        height: 100%;
        align-items: center;
        justify-content: center;
        text-align: center;
        div {
            font-weight: bold;
            font-size: 24pt;
        }
    }
    @media only screen and (max-width: 1159px) {
        #content-div div {
            font-size: 20pt;
        }
    }
    @media only screen and (max-width: 1035px) {
        #content-div div {
            font-size: 18pt;
        }
    }
    @media only screen and (max-width: 576px) {
        width: 33%;
        height: 80px;
        margin: 5px 0;
        flex-direction: column;
        align-items: center;
        #icon-div {
            img {
                width: 26px;
                height: 26px;
            }
        }
        #content-div {
            div {
                font-weight: normal;
                font-size: 10pt;
                text-align: center;
            }
        }
    }
`;
