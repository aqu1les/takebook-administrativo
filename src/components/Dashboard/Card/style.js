import styled from 'styled-components';

export const Wrapper = styled.div`
    max-height: 45%;
    min-width: 190px;
    max-width: 14%;
    width: 40%;
    height: 50%;
    background-color: white;
    box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.16);
    border-radius: 8px;
    margin: 5px 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    * { 
        color: #FFF;
    }
    img {
        position: absolute;
        top: 15px;
        left: 20px;
    }
    a {
        text-decoration: none;        
    }
    h2, h3 {
        text-align: center;
        transition: transform 150ms;
        &:hover {
            transform: scale(1.1);
        }
    }
    a h3 {
        text-align: center;
        font-weight: 400 !important;
        font-size: 16px;
    }

    @media only screen and (max-width: 960px) {
        max-height: 45%;
        width: 110px
        min-width: 110px;
        font-size: 12px;
    }
    @media only screen and (max-width: 576px) {
        min-width: 80px;
        font-size: 10px;
        img {
            top: 5px;
            left: 10px;
            width: 15px;
            height: 15px;
        }
    }
`;