import styled from "styled-components";

const width920 = "@media only screen and (max-width: 920px)";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;
export const Card = styled.div`
    width: 100%;
    height: 98%;
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.16);
    border-radius: 8px;
    background-color: #FBFBFB;
    padding: 10px;
`;
export const Header = styled.header`
    height: 20%;
`;
export const Search = styled.div`
    width: 80%;
    margin-top: 20px;
    height: 50px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
    border-radius: 40px;
    display: flex;
    align-items: center;
    background-color: white;

    input {
        border: none;
        width: 80%;
        height: 90%;
        margin-left: 25px;
        border-radius: 40px;
        font-size: 18px;
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
    }
`;
export const Main = styled.main`
    height: 80%;
    h2 {
        margin-bottom: 10px;
    }
`;
export const Content = styled.section`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;