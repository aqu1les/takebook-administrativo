import React from 'react';
import { Loader } from './style';

export default function Loading() {
    return (
        <Loader>
            <div className="lds-dual-ring"></div>
        </Loader>
    );
}
