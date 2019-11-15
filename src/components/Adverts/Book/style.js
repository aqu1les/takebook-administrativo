import styled from "styled-components";

export const Card = styled.div`
    width: 280px;
    height: 150px;
    align-items: center;        
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.16);
    border-radius: 12px;
    padding: 5px;
    display: flex;
    flex-direction: column;
    margin: 10px;
    position: relative;
    header {
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 85%;
        width: 100%;
        img {
            height: 80%;
            width: 30%;
            position: absolute;
            left: 0;
            bottom: 0;
            top: 15px;
        }
        div {
            margin-left: 87px;
            padding: 5px;
            width: 70%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            h1 {
                font-size: 20px;
                margin-top: 10px;
            }
            h2 {
                font-size: 14px;
                font-weight: 400;
                margin-bottom: 80px;
            }        
        }
    }   
    button {
        height: 15%;
        justify-self: center;
        background-color: unset;
        border: none;
        color: #2BC1F3;
        font-size: 18px;
        font-weight: 700;
        align-self: center;
        cursor: pointer;
    }
`;