import React from 'react';
import { Wrapper, Bg } from './style';

export default function Modal(props) {
    const { open, children, click } = props;
    return (
        <Wrapper open={open}>
            <Bg onClick={click} />
            {children}
        </Wrapper>
    );
}
