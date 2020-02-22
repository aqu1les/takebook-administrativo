import React from 'react';
import { Div } from './style';
import searchIcon from '../../assets/icons/search.svg';

export default function Search(props) {
    return (
        <Div>
            <input
                type="text"
                name="filter"
                placeholder="Pesquisar"
                onChange={props.onChange}
            />
            <button onClick={props.onClick}>
                <img src={searchIcon} alt="Search icon" />
            </button>
        </Div>
    );
}
