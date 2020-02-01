import styled from "styled-components";

export const Wrapper = styled.li`
    width: 95%;
    height: 100px;
    position: relative;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }
    *, *:link {
        text-decoration: none;
    }
    
`

export const Main = styled.main`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 5px;

    img {
        border-radius: 6px;
        margin-right: 4px;
    }
    p {
        text-decoration: none;
        font-size: 14px;
        &:link {
            text-decoration: none;
        }
    }
`

export const TimeStamp = styled.footer`
    position: absolute;
    font-style: italic;
    font-size: 11px;
    bottom: 0;
    right: 2px;
`