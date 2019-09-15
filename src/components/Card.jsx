import React, { Component } from "react";
import styled from "styled-components";

export default class card extends Component {
    render() {
        const { icon, qtd, text, onClick } = this.props;
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
    @media only screen and (max-width: 576px) {
        width: 33%;
        height: 80px;
        margin: 5px 0;
        flex-direction: column;
        align-items: center;
        #icon-div {
            img {
                width: 30px;
                height: 30px;
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
