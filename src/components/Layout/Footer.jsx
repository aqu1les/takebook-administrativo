import React from "react";
import styled from "styled-components";

const Footer = styled.footer`
    grid-area: footer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 25px;
    background: #fff;
`;

export default () => {
    return (
        <Footer>
            Desenvolvido por dois{" "}
            <span role="img" aria-label="Emoji do poop">
                💩
            </span>
            .
        </Footer>
    );
};
