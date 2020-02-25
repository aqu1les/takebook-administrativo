import React from 'react';
import { PopUp } from './style';
import error from '../../assets/icons/error.svg';
import { memo } from 'react';

function Popup(props) {
    const { msg, show, variant } = props;
    if (!show) return null;
    else {
        return (
            <PopUp variant={variant}>
                <p>
                    <img
                        src={error}
                        alt="error icon"
                        width="20"
                        height="20"
                    ></img>
                    {msg}
                </p>
            </PopUp>
        );
    }
}

export default memo(Popup);
