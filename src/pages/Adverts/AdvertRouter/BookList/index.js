import React, { memo, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import jQuery from 'jquery';
import { Main, Content, Footer } from './style';
import Loading from '../../../../components/Loading';
import Book from '../../../../components/Adverts/Book';
import { useHistory } from 'react-router-dom';
import {
    loadAdvertsAction,
    loadNextPageToValidate,
    loadNextPageAllBooks,
    loadNextPageApprovedBooks,
    loadNextPageRejectedBooks,
} from '../../../../redux/Actions/adverts';
import { loadCategoriesAction } from '../../../../redux/Actions/categories';

function AdvertRouter({ nameSearch, section }) {
    const isLoading = useSelector(state => state.adverts.loading);
    const isLoadingMore = useSelector(state => state.adverts.loadingMore);
    const dispatch = useDispatch();
    const history = useHistory();
    const adverts = useSelector(state => {
        switch (section) {
            case 'all': {
                return state.adverts.all.data;
            }
            case 'approved': {
                return state.adverts.approvedAdverts.data;
            }
            case 'analyze': {
                return state.adverts.toValidateAdverts.data;
            }
            case 'refused': {
                return state.adverts.rejectedAdverts.data;
            }
            default: {
                return state.adverts.all.data;
            }
        }
    });
    const nextPage = useSelector(state => {
        switch (section) {
            case 'all': {
                return state.adverts.all.nextPage;
            }
            case 'approved': {
                return state.adverts.approvedAdverts.nextPage;
            }
            case 'analyze': {
                return state.adverts.toValidateAdverts.nextPage;
            }
            case 'refused': {
                return state.adverts.rejectedAdverts.nextPage;
            }
            default: {
                return state.adverts.all.nextPage;
            }
        }
    });

    let filtered = adverts
        ? adverts.filter(
              ad =>
                  ad.title.toLowerCase().indexOf(nameSearch.toLowerCase()) !==
                  -1
          )
        : [];

    const loadMorePosts = useCallback(() => {
        switch (section) {
            case 'all': {
                dispatch(loadNextPageAllBooks(nextPage));
                break;
            }
            case 'approved': {
                dispatch(loadNextPageApprovedBooks(nextPage));
                break;
            }
            case 'analyze': {
                dispatch(loadNextPageToValidate(nextPage));
                break;
            }
            case 'refused': {
                dispatch(loadNextPageRejectedBooks(nextPage));
                break;
            }
            default: {
                dispatch(loadNextPageAllBooks(nextPage));
                break;
            }
        }
    }, [dispatch, nextPage, section]);

    useEffect(() => {
        dispatch(loadAdvertsAction());
        dispatch(loadCategoriesAction());
    }, [dispatch]);

    useEffect(() => {
        const scrollableSection = jQuery('#content-scroll');
        scrollableSection.on('scroll', handleScroll);
        function handleScroll(event) {
            if (
                scrollableSection.scrollTop() +
                    scrollableSection.innerHeight() >=
                    scrollableSection[0].scrollHeight &&
                nextPage
            ) {
                loadMorePosts();
            }
        }
        return () => {
            scrollableSection.off('scroll', handleScroll);
        };
    }, [nextPage, loadMorePosts]);

    function openModal(id) {
        history.push(`/adverts/${id}`);
    }
    return (
        <>
            <Main>
                <Content id="content-scroll">
                    {isLoading && !isLoadingMore ? (
                        <Loading />
                    ) : filtered.length > 0 ? (
                        filtered.map((ad, index) => (
                            <Book
                                book={ad}
                                key={index}
                                onClick={e => openModal(ad.id)}
                            />
                        ))
                    ) : (
                        <h1>Não tem nenhum livro para ser listado!</h1>
                    )}
                </Content>
            </Main>

            {isLoadingMore ? (
                <Loading />
            ) : nextPage ? (
                <Footer>
                    <button onClick={loadMorePosts}>Carregar mais</button>
                </Footer>
            ) : null}
        </>
    );
}
export default memo(AdvertRouter);
