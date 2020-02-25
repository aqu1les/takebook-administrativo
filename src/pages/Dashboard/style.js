import styled from 'styled-components';

const width920 = '@media only screen and (max-width: 920px)';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;
export const Card = styled.div`
    height: 90%;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
`;
export const CardHeader = styled.header`
    height: 40%;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    div:nth-child(1) {
        background-image: linear-gradient(to top, #ff5203, #ffa900);
    }
    div:nth-child(2) {
        background-image: linear-gradient(to top, #05feb2, #81e9c9);
    }
    div:nth-child(3) {
        background-image: linear-gradient(to top, #0eccd9, #50f1fc);
    }
    div:nth-child(4) {
        background-image: linear-gradient(to top, #f90a4c, #fe008f);
    }
    div:nth-child(5) {
        background-image: linear-gradient(to top, #a18cd1, #fbc2eb);
    }
    div:nth-child(6) {
        background-image: linear-gradient(to top, #fe03ee, #f3d3f3);
    }
`;
export const CardContent = styled.main`
    margin-top: 10px;
    height: 50%;
    width: 100%;
    background-color: #fefefe;
    box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.16);
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h2 {
        font-weight: 500;
        margin-top: 10px;
        @media only screen and (max-width: 576px) {
            font-size: 12px;
        }
    }
    ${width920} {
        justify-content: space-around;
    }
`;
