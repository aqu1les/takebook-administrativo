import React from 'react';
import { Wrapper, Main, TimeStamp } from './style';
import { formatDistanceToNow } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
import { NavLink } from 'react-router-dom';

export default function Notification({ notification }) {
    const parsed = Date.parse(notification.created_at);
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
        <NavLink to="/adverts">
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
                    {formatDistanceToNow(parsed, { locale: pt })}
                </TimeStamp>
            </Wrapper>
        </NavLink>
    );
}
