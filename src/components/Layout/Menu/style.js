import styled, { css } from "styled-components";

export const Menu = styled.aside`
    ${props =>
        !props.show &&
        css`
        display: none;
    `}
    width: 240px;
    height: 100%;
    transition: width 300ms;
    transition-timing-function: ease;
    display: flex;
    flex-direction: column;
    background: linear-gradient(to bottom, #004975, #0091e4);
    align-items: center;
    * {
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    #img {
        background-color: rgba(255, 255, 255, 0.2);
        border-radius: 100px;
        width: 100px;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 10px;
        margin-bottom: 10px;
        img {           
            width: 70px;
            height: 70px;        
        }
    }
    a {
        text-decoration: none;
        color: #fff;
        height: 50px;
        max-width: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        &:visited {
            color: #fff;
        }
        &:hover {
            background-color: #005b91;
        }
        img {
            margin-left: 24px;
            width: 24px;
            height: 24px;
        }
        p {
            margin-left: 25px;
        }
    }
    a.active {
        background-color: #0a85ae;
        width: 238px;
        border-left: 2px solid #e3b02f;
    }
    @media only screen and (max-width: 720px) {
        position: fixed;
        bottom: 0;
        height: 52px;
        width: 100vw;
        background: linear-gradient(to right, #004975, #0091e4);
        flex-direction: row;
        align-items: center;
        a {
            width: 25%;
            justify-content: center;
            img {
                margin: 0;
            }
        }
        #img, a>p {
            display: none
        }
        a.active {
            background-color: #0a85ae;
            border-left: 0;
            border-top: 2px solid #e3b02f;
            padding: 0;
            width: 25%;
        }
    }
`;