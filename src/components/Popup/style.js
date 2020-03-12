import styled, { keyframes } from 'styled-components';

const moveLeft = keyframes`
    from {
        width: 0;
        opacity: 0;
    }
    75% {
        opacity: 0.5;
    }
    to {
        width: 220px;
        opacity: 1;
    }
`;
const disappear = keyframes`
    from {
        opacity: 1;
    }
    to {
        width: 0;
        opacity: 0;
    }
`;
export const PopUp = styled.div`
    position: absolute;
    z-index: 100;
    background-color: ${props =>
        props.variant === 'danger' ? 'rgb(229, 63, 82)' : 'rgb(0, 150, 0)'};
    top: 20px;
    right: 0;
    width: 220px;
    height: 50px;
    border-radius: 15px 0px 0px 15px;
    box-shadow: 4px 2px 10px 10px rgba(0, 0, 0, 0.1);
    color: #fff;
    display: ${props => (props.open ? 'flex' : 'none')};
    justify-content: center;
    align-items: center;
    animation: ${moveLeft} 500ms, ${disappear} 500ms;
    animation-delay: 0s, 1500ms;
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
