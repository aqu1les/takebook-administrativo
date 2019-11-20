import styled from "styled-components";

const width920 = "@media only screen and (max-width: 920px)";

export const Div = styled.div`
    width: 80%;
    margin-top: 20px;
    height: 50px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
    border-radius: 40px;
    display: flex;
    align-items: center;
    background-color: white;
    transition: width 100ms;

    &:hover, &:focus {
        width: 85%;
    }

    input {
        border: none;
        width: 80%;
        height: 90%;
        margin-left: 25px;
        border-radius: 40px;
        font-size: 18px;
        padding-left: 8px;

        &:focus, &:active {
            outline: none;
        }
        &::placeholder {
            font-size: 18px;            
        }
    }

    button {
        background-color: #EFEFEF;
        margin-right: 10px
        margin-left: auto;
        border: none;
        height: 30px;
        width: 80px;
        border-radius: 40px;
        img {
            height: 24px;
            width: 24px;
        }
        &:focus, &:active {
            outline: none;
        }
    }
    ${width920} {
        box-shadow: none;
    }
`;