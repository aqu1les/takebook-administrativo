import React from 'react';
import { Wrapper, Main, TimeStamp } from './style';
import { formatDistanceToNow } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';

export default function Notification({ notification }) {
    const date = notification.created_at + '';
    const datetime = date.includes('T')
        ? new Date(notification.created_at)
        : new Date(notification.created_at + ' UTC');

    let desc;
    switch (notification.reason) {
        case 'BOOK_CREATED':
            desc = 'Um livro novo foi adicionado, clique para ir para análise.';
            break;
        case 'BOOK_ACCEPTED':
            desc = 'Seu livro foi aceito pelos administradores!';
            break;
        default:
            desc = 'Uma notificação qualquer';
    }
    return (
        <Wrapper opened={notification.opened}>
            <Main>
                {notification.book.covers_url.length > 0 ? (
                    <img
                        src={notification.book.covers_url[0].url}
                        alt="Book cover"
                        width="60"
                        height="80"
                    />
                ) : (
                    <div></div>
                )}
                <p>{desc}</p>
            </Main>
            <TimeStamp>
                {formatDistanceToNow(datetime, {
                    locale: pt,
                })}
            </TimeStamp>
        </Wrapper>
    );
}
