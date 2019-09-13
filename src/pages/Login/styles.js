import styled from 'styled-components';
const width920 = "@media only screen and (max-width: 920px)"

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    ${width920} {
        background-color: #fff;
        background-image: none;
    }
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
        width: 100vw;
        box-shadow: unset;
        flex-direction: column;
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
        width: 100%;
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
    justify-content: center;
    border-radius: 50px;
    flex-direction: row;
    border: rgb(100, 168, 207) solid 1.5px;
    margin: 5px;
    background-color: #fff;
    padding: 3px;
    padding-left: 8px;
`;

export const Input = styled.input`
    width: 240px;
    border-radius: 14px;
    border: unset;
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
    }
    &:focus {
        outline: none;
        opacity: 0.8;
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
export const BgLogin = styled.div`
    #left-bottom {
        position: absolute;
        left: 0;
        bottom:0;
        width: 480px;
    }
    #bot-center {
        position: absolute;
        width: 480px;
        bottom: 0;
        left: 40%;
    }
    #top-right {
        position: absolute;
        width: 480px;
        top: 0;
        right: 0;
    }
    ${width920} {
        display: none;
    }
`;