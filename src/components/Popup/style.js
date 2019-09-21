import styled, { keyframes } from "styled-components";

const moveLeft = keyframes`
    from {
        transform: translateX(20px);
        opacity: 0;
    }
    75% {
        opacity: 0.5;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
`;
const disappear = keyframes`
    from {
        transform: translateX(0);
        opacity: 1;
    }
    to {
        transform: translateX(20px);
        opacity: 0;
    }
`;
export const PopUp = styled.div`
    position: absolute;
    top: 20px;
    right: 0;
    width: 220px;
    height: 50px;
    background-color: rgb(255, 10, 60);
    border-radius: 15px 0px 0px 15px;
    box-shadow: 4px 2px 10px 0 rgba(0, 0, 0, 0.1);
    color: #FFF;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: ${moveLeft} 500ms, ${disappear} 500ms;
    animation-delay: 0s, 2500ms;
    p {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 80%;
        img {
            margin-right: 10px;
        }
    }
    @media only screen and (max-width: 920px) {
        position: fixed;
    }
`;