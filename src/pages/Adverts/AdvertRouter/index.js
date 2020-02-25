import React from 'react';
import { useParams, Redirect } from 'react-router-dom';
import BookInfoModal from '../BookInfoModal';
import BookList from './BookList';

export default function All({ nameSearch }) {
    const { type } = useParams();

    if (!isNaN(type)) {
        return <BookInfoModal advertID={type} />;
    } else {
        switch (type) {
            case 'approved': {
                return <BookList nameSearch={nameSearch} section="approved" />;
            }
            case 'analyze': {
                return <BookList nameSearch={nameSearch} section="analyze" />;
            }
            case 'refused': {
                return <BookList nameSearch={nameSearch} section="refused" />;
            }
            default: {
                return <Redirect to="/adverts" />;
            }
        }
    }
}
