import React from 'react';
import { Wrapper, Main, TimeStamp } from './style';
import { formatDistanceToNow } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
import { NavLink } from 'react-router-dom';

export default function Notification({ notification }) {
    const parsed = Date.parse(notification.created_at);

    return (
        <NavLink to="/adverts">
            <Wrapper opened={notification.opened}>
                <Main>
                    <img
                        src={notification.book.covers_url[0].url}
                        alt="Book cover"
                        width="60"
                        height="80"
                    />
                    <p>
                        {notification.reason === 'BOOK_CREATED'
                            ? 'Um livro novo foi adicionado, ir para análise.'
                            : 'Notificação qualquer'}
                    </p>
                </Main>
                <TimeStamp>
                    {formatDistanceToNow(parsed, { locale: pt })}
                </TimeStamp>
            </Wrapper>
        </NavLink>
    );
}
