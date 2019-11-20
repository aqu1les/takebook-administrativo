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
        font-weight: 400;
    }
    ${width920} {
        height: 75%;        
    }
`;
export const Content = styled.section`
    height: 95%;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    overflow-y: scroll;
    
    ul {
        margin-top: 5px;
        list-style: none;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        
    }

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
export const Footer = styled.footer`
    height: 7%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    ${width920} {
        height: 12%;     
    }
    ul {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 100%;
        list-style: none;
        li button {
            background-color: none;
            border: none;
            padding: 8px;
            border-radius: 8px;
            min-width: 28px;
            color: #2bc1f3;
            background-color: #FFFFFF;
            cursor: pointer;
            &:hover {
                text-decoration: underline;
            }
            &:active, &:focus {
                outline: none;
            }
        }
        li button:disabled {
            cursor: not-allowed;
            background-color: #ebebe4;
            &:hover {
                text-decoration: none;
            }
        }
        li button.active {
            cursor: not-allowed;
            background-color: #2bc1f3;
            color: #FFFFFF;
        }
        
    }
`;

export const Li = styled.li`
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 22px;
    height: 70px;
    width: 95%;
    background-color: #FFFFFF;
    border-radius: 20px;
    margin: 10px 0;
    box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.16);
    padding: 5px;
    &:hover {
        opacity: 0.8;
    }
    p, img {
        margin: 0 10px;
    }
    div {
        margin-right: 5px;
        margin-left: auto;
        button {
            margin: 5px;
            background-color: unset;
            border: unset;
            font-size: 16px;
            cursor: pointer;
            padding: 5px;
            border-radius: 20px;
            span {
                img {
                    width: 15px;
                    height: 15px;
                    margin: 3px;
                }                
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
            }
            &:active, &:focus {
                outline: none;
            }
        }
        button:first-child {
            color: red;
            &:hover {
                border: 0.5px solid red;
            }
        }
        button:last-child {
            color: #2BC1F3;
            &:hover {                
                border: 0.5px solid #2BC1F3;
            }
        }
    }    
`
export const ModalCard = styled.section`
    width: 720px;
    height: 633px;
    background-color: #FFFFFF;
    border-radius: 20px;
    box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.16);
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    z-index: 2;
    padding: 10px;

    header {
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: center;
        position: relative;
        h1 {
            font-weight: 500;
            font-size: 28px;
            margin: 15px 0;
        }
        img {
            position: absolute;
            top: 20px;
            right: 20px;
            cursor: pointer;
        }
    }
    div#divider {
        height: 0;
        width: 70%;
        border: 0.5px solid #C1C3C42f;
    }
    ${width920} {
        width: 100%;
        height: 80%;
    }
`

export const ModalForm = styled.form`
    padding: 15px;
    display: flex;
    width: 85%;
    flex-direction: column;
    overflow-y: scroll;

    h2 {
        font-weight: 400;
        font-size: 24px;
        margin: 15px 0;
    }
    .form-group {
        margin: 5px;
        width: 98%;
        display: flex;
        flex-direction: column;
        input {
            padding: 8px;
            border-radius: 10px;
            border: 1px solid #E2E4E5;
            height: 24px;
            &:active, &:focus {
                outline: none;
                border: 1px solid #2BC1F3;
            }
        }
    }
    .row {
        display: flex;
        flex-direction: row;
        .form-group {
            width: 50%;
        }
    }

    button {
        margin-top: 10px;
        padding: 10px;
        color: #FFFFFF;
        border-radius: 50px;
        background-color: #FF7714;
        width: 150px;
        height: 45px;
        border: unset;
        align-self: center;
        font-size: 20px;
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.16);
        cursor: pointer;
        &:hover {
            opacity: 0.6;
        }
        &:active, &:focus {
            outline: none;
        }
    }   

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
`