import styled from "styled-components";

const width920 = "@media only screen and (max-width: 920px)";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    ${width920} {
        margin: 70px 0;
    }
`;
export const Card = styled.div`
    width: 100%;
    height: 98%;
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.16);
    border-radius: 8px;
    background-color: #EFEFEF;
    padding: 0 10px;
    ${width920} {
        height: 100%;
        width: 100%;
        padding: 0;
        box-shadow: none;
        margin: 0;
        background-color: #FFF;
    }
`;
export const Header = styled.header`
    height: 13%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;
export const Main = styled.main`
    height: 80%;
    margin-left: 20px;
    h2 {
        margin-bottom: 10px;
    }
    ${width920} {
        height: 75%;        
    }
`;
export const Content = styled.section`
    height: 92%;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    overflow-y: scroll;

    ::-webkit-scrollbar {
        border-radius: 50px;
        width: 5px;     
    }
    
    /* Track */
    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 1px grey; 
        border-radius: 50px;
    }    
    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #2BC1F3; 
        border-radius: 10px;
        margin: 50px 0;
    }    
    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        opacity: 0.6;
    }
`;