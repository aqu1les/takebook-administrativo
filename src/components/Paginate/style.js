import styled from "styled-components";
export const Pagination = styled.ul`
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
        box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.16);
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
`