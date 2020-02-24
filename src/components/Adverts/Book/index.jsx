import React from 'react';
import { Card, Header, Body, Button } from './style';
import { memo } from 'react';

function Book(props) {
    const { author, title, covers_url } = props.book;
    return (
        <Card>
            <Header>
                <img src={covers_url[0].url} alt="Capa do livro" />
                <Body>
                    <h2>{title}</h2>
                    <h3>{author}</h3>
                </Body>
            </Header>
            <Button onClick={props.onClick}>> Ver</Button>
        </Card>
    );
}

export default memo(Book);
