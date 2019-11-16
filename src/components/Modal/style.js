import styled from "styled-components";

export const Wrapper = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    display: ${props => props.open ? 'flex' : 'none'};
    background-color: rgba(0, 0, 0, 0.2);
    align-items: center;
    justify-content: center;
`
export const Bg = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    z-index: 1;
`