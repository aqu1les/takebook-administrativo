import React, { Component } from "react";
import styled from "styled-components";

export default class card extends Component {
    render() {
        const { icon, qtd, text } = this.props;
        return (
            <Card>
                <div id="icon-div">
                    <img
                        src={icon}
                        alt="Ícone do card"
                        width="60"
                        height="60"
                    />
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
    width: 33%;
    background-color: #ffaa01;
    color: #fff;
    box-shadow: 1px 1px 14px 1px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    margin: 5px;
    display: flex;
    flex-direction: row;
    #icon-div {
        width: 45%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    #content-div {
        display: flex;
        flex-direction: column;
        width: 55%;
        height: 100%;
        align-items: center;
        justify-content: center;
        div {
            font-weight: bold;
            font-size: 24pt;
        }
    }
`;
