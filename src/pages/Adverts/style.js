import styled from 'styled-components';

const width920 = '@media only screen and (max-width: 920px)';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    ${width920} {
        margin: 70px 0;
        &:first-child {
            position: absolute;
            top: 0;
            left: 5;
        }
    }
`;
export const Card = styled.div`
    width: 100%;
    height: 95%;
    margin-top: 15px;
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.16);
    border-radius: 8px;
    background-color: #efefef;
    ${width920} {
        height: 100%;
        max-height: 100%;
        width: 100%;
        padding: 0;
        box-shadow: none;
        margin: 0;
        background-color: #fff;
    }
`;

export const Header = styled.header`
    height: 13%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 5px;

    nav {
        height: 100%;
        width: 50%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;

        a {
            padding: 5px;
            height: 100%;
            max-height: 40px;
            border-radius: 12px;
            background-color: #ffffff;
            display: flex;
            align-items: center;
            justify-content: space-between;
            box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
            font-size: 12px;
            text-decoration: none;
            color: #000000;
            p {
                margin-right: 2px;
            }
            &.active {
                border: 1px solid #69d2e7;
                color: #69d2e7;
            }
        }
    }

    ${width920} {
        flex-direction: column;
        min-height: 23%;
        padding: 5px 0px;
        justify-content: space-evenly;
        nav {
            display: flex;
            width: 100%;
            flex-direction: row;
            height: 50%;
        }
    }
`;
