import React, { Component } from 'react';
import { Wrapper, Card } from './style';
import openBook from '../../assets/icons/open-book.png';

export default class NotFound extends Component {

    render() {
        return (
            <Wrapper>
                <Card>
                    <img src={openBook} alt='Ícone aberto' />
                    <h1>Ooops... Este livro está sem kappa.</h1>
                    <h1>Erro 404</h1>
                </Card>
            </Wrapper>
        );
    }
}