import React, { useState } from 'react';
import { PopUp } from './style';
import error from '../../assets/icons/error.svg';
import { memo } from 'react';
import { PopupContext } from './Context';

function Popup({ children }) {
    const [isOpen, setOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [variant, setVariant] = useState('');

    function _notify(msg) {
        setMessage(msg);
        setOpen(true);
        setTimeout(() => {
            setOpen(false);
        }, 2000);
    }

    function notifySuccess(msg) {
        setVariant('success');
        _notify(msg);
    }

    function notifyError(msg) {
        setVariant('danger');
        _notify(msg);
    }

    return (
        <PopupContext.Provider value={{ notifyError, notifySuccess }}>
            <PopUp open={isOpen} variant={variant}>
                <p>
                    <img src={error} alt="error icon" width="20" height="20" />
                    {message}
                </p>
            </PopUp>
            {children}
        </PopupContext.Provider>
    );
}

export default memo(Popup);
