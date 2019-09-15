import styled from "styled-components";
export const Header = styled.header`
    height: 62px;
    background-color: #024973;
    margin-bottom: 20px;
    width: 100vw;
    grid-area: header;
    @media only screen and (max-width: 576px) {
        height: 50px;
        background-color: #024973;
        position: fixed;
        top: 0;
    }
    nav {
        height: 100%;
        margin-left: auto;
        margin-right: 10px;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100vw;
        div {
            display: flex;
            align-items: center;
            height: 100%;
        }
        #initial-part {
            justify-content: flex-start;
            min-width: 320px;
            button {
                background-color: unset;
                border: none;
                cursor: pointer;
                margin-left: 20px;
                margin-right: 20px;
                &:focus {
                    outline: none;
                    border: none;
                }
            }

            @media only screen and (max-width: 576px) {
                display: none;
            }
        }
        #mid-part {
            justify-content: center;
            justify-self: center;
            a {
                width: 50px;
                height: 50px;
            }
            @media only screen and (max-width: 576px) {
                margin-left: 25px;
            }
        }
        #end-part {
            justify-content: flex-end;
            button {
                margin: 10px;
            }
            #dropdown {
                position: relative;
            }
            #dropdown-content {
                display: none;
                position: absolute;
                background-color: #f9f9f9;
                min-width: 130px;
                box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
                padding: 6px 16px;
                z-index: 1000;
                right: 10px;
                top: 50px;
                list-style: none;
                color: #000;
                li {
                    margin: 8px;
                    cursor: pointer;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    &:hover {
                        opacity: 0.5;
                    }
                }
            }

            #dropdown:hover #dropdown-content {
                display: block;
            }
            #btnImg {
                background-color: unset;
                border: none;
                cursor: pointer;
                &:focus {
                    outline: none;
                    border: none;
                }
            }
            #userOptions {
                background-color: unset;
                border: none;
                cursor: pointer;
                margin-right: 20px;
                &:focus {
                    outline: none;
                    border: none;
                }
                img {
                    width: 30px;
                    height: 30px;
                    &:hover {
                        box-shadow: 1px 1px 4px 1px rgba(0, 0, 0, 0.2);
                        border-radius: 50px;
                        opacity: 0.8;
                    }
                }
            }
            @media only screen and (max-width: 576px) {
                justify-content: space-around;
            }
        }
    }
`;