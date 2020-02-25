import styled from 'styled-components';

const width920 = '@media only screen and (max-width: 920px)';

export const Main = styled.main`
    height: 80%;
    width: 100%;
    h2 {
        margin-bottom: 10px;
        font-weight: 400;
    }
    ${width920} {
        height: 70%;
    }
`;

export const Content = styled.section`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    overflow-y: scroll;

    ::-webkit-scrollbar {
        border-radius: 50px;
        width: 5px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 1px grey;
        border-radius: 50px;
    }
    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #2bc1f3;
        border-radius: 10px;
        margin: 50px 0;
    }
    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        opacity: 0.6;
    }
`;

export const Footer = styled.footer`
    height: 7%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;

    button {
        height: 90%;
        width: 100px;
        border: 1px solid #2bc1f3;
        border-radius: 8px;
        color: #2bc1f3;
        background-color: #ffffff;
        box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
        cursor: pointer;
        &:focus,
        &:hover {
            outline: none;
        }
    }
    ${width920} {
        height: 7%;
    }
`;
