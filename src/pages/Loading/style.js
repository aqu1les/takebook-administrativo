import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    #logo {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    #logo > path:nth-child(1) {
        stroke-dasharray: 364.6;
        stroke-dashoffset: 364.6;
        animation: line-animation 0.8s ease forwards, fill 1s ease forwards 0.8s;
    }
    #logo > path:nth-child(2) {
        stroke-dasharray: 536.6;
        stroke-dashoffset: 536.6;
        animation: line-animation 0.8s ease forwards 0.2s,
            fill 1s ease forwards 1s;
    }
    #logo > path:nth-child(3) {
        stroke-dasharray: 546.34;
        stroke-dashoffset: 546.34;
        animation: line-animation 0.8s ease forwards 0.4s,
            fill 1s ease forwards 1.2s;
    }
    #logo > path:nth-child(4) {
        stroke-dasharray: 565.34;
        stroke-dashoffset: 565.34;
        animation: line-animation 0.8s ease forwards 0.6s,
            fill 1s ease forwards 1.6s;
    }
    #logo > path:nth-child(5) {
        stroke-dasharray: 714.51;
        stroke-dashoffset: 714.51;
        animation: line-animation 0.8s ease forwards 0.8s,
            fillOrange 1s ease forwards 1.8s;
    }
    #logo > path:nth-child(6) {
        stroke-dasharray: 595.57;
        stroke-dashoffset: 595.57;
        animation: line-animation 0.8s ease forwards 1s,
            fillOrange 1s ease forwards 2s;
    }
    #logo > path:nth-child(7) {
        stroke-dasharray: 595.57;
        stroke-dashoffset: 595.57;
        animation: line-animation 0.8s ease forwards 1.2s,
            fillOrange 1s ease forwards 2.2s;
    }
    #logo > path:nth-child(8) {
        stroke-dasharray: 546.84;
        stroke-dashoffset: 546.84;
        animation: line-animation 0.8s ease forwards 1.4s,
            fillOrange 1s ease forwards 2.4s;
    }
    @keyframes line-animation {
        to {
            stroke-dashoffset: 0;
        }
    }
    @keyframes fill {
        from {
            fill: transparent;
        }
        to {
            fill: #000;
        }
    }
    @keyframes fillOrange {
        from {
            fill: transparent;
        }
        to {
            fill: orange;
        }
    }
`;
