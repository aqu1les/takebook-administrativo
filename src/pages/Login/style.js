import styled, { keyframes, css } from 'styled-components';
import leftBottom from '../../assets/login/left-bottom.svg';
import bottomCenter from '../../assets/login/bottom-center.svg';
import topRight from '../../assets/login/top-right.svg';

const width920 = "@media only screen and (max-width: 920px)";

const fade = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`
const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`
const shake = keyframes`
    0% {
        transform: translateX(0);
    }
    35% {
        transform: translateX(-20px);
    }
    70% {
        transform: translateX(20px);
    }
    100% {
        transform: translateX(0);
    }
`
export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${leftBottom}), url(${bottomCenter}), url(${topRight});
    background-size: 480px, 480px, 480px;
    background-position: left bottom, center bottom, right top;
    background-repeat: no-repeat;
    ${width920} {
        width: 100vw;
        height: 100vh;
        background-color: #FFF;
        background-position: left bottom, right bottom, right top;
        background-size: 200px;
    }
    overflow: hidden;
`;

export const CardAuth = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #fff;
    position: absolute;
    width: 920px;
    height: 500px;
    border-radius: 14px;
    align-items: center;
    justify-content: center;
    box-shadow: 4px 2px 10px 0 rgba(0, 0, 0, 0.1);
    ${width920} {
        box-shadow: unset;
        position: relative;
        width: 100vw;
        flex-direction: column;
        background-color: rgba(255, 255, 255, 0);
    }    
`;

export const Divider = styled.div`
    background: #ccc;
    width: 2px;
    height: 400px;
    border-radius: 80px;
    ${width920} {
        display: none;
    }
`;

export const LogoImg = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    animation: ${fade} 1000ms;
    ${props =>
        props.submiting === true && css`
            animation: ${rotate} 1s infinite ease-in-out;
        `
    }
`;

export const Logo = styled.img`
    margin-top: 10px;
    margin-bottom: 25px;
    transition: 200ms transform;
    &:hover {
        transform: scale(1.1);
    }
    ${width920} {
        display: none;
    }
`;

export const AppName = styled.img`
    display: none;
    ${width920} {
        display: initial;
        width: 70%;
    }
`;

export const Form = styled.form`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    h2 {
        margin-top: 5px;
        text-shadow: 2px 2px rgba(0, 0, 0, 0.1);          
    }
    ${width920} {
        height: auto;
        min-height: 300px;
        width: auto;
        h2 {
           margin-top: -50px;
        }
    }
`;

export const H2 = styled.h2`
    margin-top: 5px;
    text-shadow: 2px 2px rgba(0, 0, 0, 0.1);
    ${width920} {
        margin-top: -50px;
    }    
`;
export const FormGroup = styled.div`
    display: flex;
    align-items: center;
    border-radius: 50px;
    flex-direction: row;
    margin: 5px;
    background-color: #fff;
    padding: 3px;
    padding-left: 8px;
    label {
        display: flex;
        align-items: center;
    }
    ${props =>
        props.error === true && css`
            animation: ${shake} 100ms;
            border: 1px solid red;
        `
    }
    ${props =>
        props.error === false && css`
            border: rgb(100, 168, 207) solid 1.5px;
        `
    }    
`;

export const Input = styled.input`
    width: 240px;
    border-radius: 14px;
    border: 0;
    padding: 8px;
    font-weight: 500;
    &::-webkit-input-placeholder {
        font-weight: 500;
    }
    &:focus {
        outline: unset;
    }
`;

export const SendButton = styled.button`
    margin-top: 5px;
    margin-bottom: 5px;
    height: 40px;
    width: 160px;
    border-radius: 40px;
    border: 0;
    box-shadow: 1px 1px 4px 1px rgba(0, 0, 0, 0.2);
    background-color: #f58634;
    color: #fff;
    transition: 200ms transform;
    font-weight: bolder;
    font-size: 12pt;
    &:hover {
        transform: scale(1.05);
        box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.19);
        opacity: 0.8;
    }
    &:focus {
        outline: none;
        border: 0;
    }
`;
export const UserIcon = styled.img`
    border-radius: 100px;
    box-shadow: 4px 2px 10px 0 rgba(0, 0, 0, 0.1);
    transition: 200ms transform;
    &:hover {
        transform: scale(1.1);
    }
    ${width920} {
        display: none;
    }
`;