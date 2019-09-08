import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;
export const CardHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media only screen and (max-width: 576px) {
        flex-direction: row;
    }
`;
export const CardBody = styled.section`
    margin-top: 10px;
    display: flex;
    height: 100%;
    flex-direction: row;
    background-color: #FFF;
    box-shadow: 1px 1px 8px 1px rgba(0, 0, 0, 0.2);
    @media only screen and (max-width: 576px) {
        flex-direction: column;
    }
`;
export const CardFooter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media only screen and (max-width: 576px) {
        flex-direction: column;
    }
`;
export const OpenReq = styled.div`
    height: 140px;
    width: 48%;
    background-color: #ff5205;
    color: #FFF;
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding: 5px;
    box-shadow: 1px 1px 8px 1px rgba(0, 0, 0, 0.2);
    p {
        text-align: center;
        font-size: 18pt;
        font-weight: bold;
    }
    
    h3 {
        text-align: center;
        font-size: 24pt;
        min-width: 30px;
    }
    @media only screen and (max-width: 576px) {
        padding: 0;
        width: 100%;
        height: 100px;
        margin-right: 15px;
        p {
            font-size: 12pt;
        }
        h3 {
            font-size: 16pt;
        }
    }
`;
export const Divider = styled.div`
    height: 85%;
    width: 1px;
    background-color: #FFF;
`;