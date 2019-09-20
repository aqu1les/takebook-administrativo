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
        svg {
            margin-left: 25px;
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
    @media only screen and (max-width: 576px) {
        width: 60px;
        flex-direction: row;
        width: 100%;
        justify-content: center;
        position: fixed;
        margin-top: 10px;
        bottom: 0;
        a {
            justify-content: center;
        }
        a svg {
            margin-left: 20px;
            margin-right: 20px;
        }
        a p {
            display: none;
        }
    }
`;