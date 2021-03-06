import styled from 'styled-components';

export const Card = styled.div`
    width: 280px;
    height: 130px;
    align-items: center;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.16);
    border-radius: 12px;
    padding: 5px;
    display: flex;
    flex-direction: column;
    margin: 10px;
    position: relative;
    background-color: #ffffff;

    @media only screen and (max-width: 576px) {
        width: 232px;
        height: 112px;
        margin: 5px;
    }
`;
export const Header = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 75%;
    width: 100%;
    img {
        height: 80%;
        width: 28%;
        position: absolute;
        left: 15px;
        bottom: 0;
        top: 15px;
        border-radius: 8px;
    }
`;
export const Body = styled.div`
    margin-left: 101px;
    padding: 5px;
    width: 65%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h2 {
        font-size: 18px;
        margin-top: 10px;
        height: fit-content;
    }
    h3 {
        font-size: 14px;
        font-weight: 400;
        margin-bottom: 80px;
    }
`;

export const Button = styled.button`
    justify-self: center;
    background-color: unset;
    border: none;
    color: #2bc1f3;
    font-size: 18px;
    font-weight: 700;
    align-self: center;
    cursor: pointer;
    padding: 5px;
    border-radius: 20px;

    &:focus,
    &:active {
        outline: none;
    }
    &:hover {
        opacity: 0.8;
    }
`;
