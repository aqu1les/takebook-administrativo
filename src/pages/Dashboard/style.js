import styled from 'styled-components';

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
    
    div:nth-child(1) { background-image: linear-gradient(to top, #FF5203, #FFA900); }
    div:nth-child(2) { background-image: linear-gradient(to top, #05FEB2, #81E9C9); }
    div:nth-child(3) { background-image: linear-gradient(to top, #0ECCD9, #50F1FC); }
    div:nth-child(4) { background-image: linear-gradient(to top, #F90A4C, #FE008F); }
    div:nth-child(5) { background-image: linear-gradient(to top, #a18cd1, #fbc2eb); }
    div:nth-child(6) { background-image: linear-gradient(to top, #FE03EE, #F3D3F3); }
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
`;
