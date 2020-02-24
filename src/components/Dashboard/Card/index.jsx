import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
import { Wrapper } from './style';

function Card(props) {
    const { title, data, icon, link } = props;
    return (
        <Wrapper>
            <img src={icon} alt="Ícone do card" />
            <h2>
                <NavLink to={`/${link}`} activeClassName="active">
                    {data || 0}
                </NavLink>
            </h2>
            <h3>
                <NavLink to={`/${link}`} activeClassName="active">
                    {title}
                </NavLink>
            </h3>
        </Wrapper>
    );
}

export default memo(Card);
