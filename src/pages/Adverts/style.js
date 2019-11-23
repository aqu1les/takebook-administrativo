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
export const Footer = styled.footer`
    height: 7%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    ${width920} {
        height: 12%;     
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
export const ModalCard = styled.section`
    width: 810px;
    height: 540px;
    background-color: #FFFFFF;
    border-radius: 25px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    position: absolute;
    z-index: 2;

    ${width920} {
        flex-direction: column;
        width: 100vw;
        height: 80%;
        border-radius: 0;
    }
`
export const ModalLeftSide = styled.div`
    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    div#covers {
        padding: 5px;
        div.slide {            
            position: relative;
            width: 200px;
            height: 300px;
            display: none;
            img {
                width: 100%;
                height: 100%;
                border-radius: 10px;
                box-shadow: 0 1px 6px rgba(0, 0, 0, 0.16);
            }
            button {
                position: absolute;
                background-color: #FB8C00;
                bottom: 5px;
                left: 90px;
                width: 20px;
                height: 20px;
                border-radius: 100px;
                border: none;
                cursor: pointer;
                ${width920} {
                    left: 50px;
                }                
            }
            ${width920} {
                width: 120px;
                height: 200px;
            }
        }        
    }    
    div#buttons img {
        height: 90px;
        width: 90px;
        cursor: pointer;
        border-radius: 100px;
        ${width920} {
            height: 45px;
            width: 45px;
        }
    }
    ${width920} {
        height: fit-content;
        width: 100%;
        margin-top: 20px;
        box-shadow: 1px 6px 8px rgba(0, 0, 0, 0.16);
    }
`
export const ModalDivider = styled.div`
    height: 430px;
    width: 0;
    border: 1px solid #C1C3C4;
    ${width920} {
        display: none;
    }
`
export const ModalRightSide = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    padding: 10px 0 10px 0;
    form {
        display: flex;
        flex-direction: column;
        height: 80%;
        width: 80%;
        label {
            color: #6D6E6E;
            font-size: 16px;
        }
        input, textarea, select {
            border: 1px solid #E2E4E5;
            border-radius: 10px;
            height: 28px;
            max-height: 46px;
            padding: 8px;
            margin: 5px 0;
            width: 100%;
            &:focus, &:active {
                border: 1px solid #2BC1F3;
                outline: none;
            }
        }
        .row {
            display: flex;
            flex-direction: row;
            justify-content: space-between
            div {
                display: flex;
                flex-direction: column;
                select {
                    height: 46px;
                }
                input, select {
                    min-width: 120px;
                }
            }
        }
        #categories {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            div {
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                input {
                    width: 20px;
                    height: 20px;
                }
                label {
                    margin: 0 5px;
                }
            }
        }
        textarea {
            max-height: 70px;
            height: 70px;
        }
    }
    ${width920} {
        height: 100vh;
        width: 100%;
        overflow-y: scroll;
        justify-content: center;
        align-items: flex-start;
        ::-webkit-scrollbar {
            border-radius: 50px;
            width: 5px;     
        }
        ::-webkit-scrollbar-track {
            box-shadow: inset 0 0 1px grey; 
            border-radius: 50px;
        }
        ::-webkit-scrollbar-thumb {
            background: #2BC1F3; 
            border-radius: 10px;
            margin: 50px 0;
        }
        ::-webkit-scrollbar-thumb:hover {
            opacity: 0.6;
        }
        form {
            min-height: 400px;
        }
    }
`