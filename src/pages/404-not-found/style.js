import styled from 'styled-components';
import leftBottom from '../../assets/login/left-bottom.svg';
import bottomCenter from '../../assets/login/bottom-center.svg';
import topRight from '../../assets/login/top-right.svg';

const width920 = "@media only screen and (max-width: 920px)";

export const Wrapper = styled.main`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${leftBottom}), url(${bottomCenter}), url(${topRight});
    background-size: 480px;
    background-position: left bottom, center bottom, right top;
    background-repeat: no-repeat;
    ${width920} {
        width: 100vw;
        height: 100vh;
        background-color: #FFF;
        background-position: left bottom, right bottom, right top;
        background-size: 200px;
    }
    overflow: hidden;
`;
export const Card = styled.section`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    position: absolute;
    width: 900px;
    height: 480px;
    border-radius: 14px;
    align-items: center;
    justify-content: center;
    box-shadow: 4px 2px 10px 0 rgba(0, 0, 0, 0.1);

    img {
        margin-bottom: 40px;
    }

    ${width920} {
        box-shadow: unset;
        position: relative;
        width: 100vw;
        flex-direction: column;
        background-color: rgba(255, 255, 255, 0);
    }
`;