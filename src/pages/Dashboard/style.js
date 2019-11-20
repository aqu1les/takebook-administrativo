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
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
    height: 100%;
    flex-direction: row;
    width: 100%;
    div {
        width: 49.5% !important;
        background-color: #FFF;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100% !important;
        svg {
            touch-action: pan-y;
        }
    }
    @media only screen and (max-width: 576px) {
        flex-direction: column;
        min-height: 490px;
        height: 600px !important;
        div {
            height: 240px !important;
            width: 100% !important;
        }
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
export const Divider = styled.div`
    height: 85%;
    width: 1px;
    background-color: #FFF;
`;