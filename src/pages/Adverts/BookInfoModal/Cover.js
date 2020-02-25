import React, { memo } from 'react';

// import { Container } from './styles';

function Cover({ url, onClick }) {
    return (
        <div className="slide">
            <img src={url} alt="Foto do livro" />
            <button onClick={onClick}></button>
        </div>
    );
}

export default memo(Cover);
