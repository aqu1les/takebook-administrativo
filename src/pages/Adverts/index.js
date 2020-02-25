import React, { useState } from 'react';
import { Switch, Route, useRouteMatch, NavLink } from 'react-router-dom';
import { Wrapper, Card, Header } from './style';
import SearchField from '../../components/SearchField';
import AdvertRouter from './AdvertRouter';
import AllIcon from '../../assets/adverts/books.svg';
import AnalyzeIcon from '../../assets/adverts/analyze.png';
import ApprovedIcon from '../../assets/adverts/approved.png';
import RefusedIcon from '../../assets/adverts/refused.png';
import BookList from './AdvertRouter/BookList';

export default function Adverts() {
    const [nameSearch, setNameSearch] = useState('');
    const { path } = useRouteMatch();

    return (
        <Wrapper>
            <h2 id="page">Anúncios</h2>
            <Card>
                <Header>
                    <nav>
                        <NavLink exact to="/adverts" activeClassName="active">
                            <p>Todos os livros</p>
                            <img
                                src={AllIcon}
                                width="24"
                                height="24"
                                alt="Ícone de navegação"
                                title="Todos os anúncios"
                            />
                        </NavLink>
                        <NavLink to="/adverts/analyze" activeClassName="active">
                            <p>Livros para análise</p>
                            <img
                                src={AnalyzeIcon}
                                width="24"
                                height="24"
                                alt="Ícone de navegação"
                                title="Anúncios em análise"
                            />
                        </NavLink>
                        <NavLink
                            to="/adverts/approved"
                            activeClassName="active"
                        >
                            <p>Livros aprovados</p>
                            <img
                                src={ApprovedIcon}
                                width="24"
                                height="24"
                                alt="Ícone de navegação"
                                title="Anúncios aprovados"
                            />
                        </NavLink>
                        <NavLink to="/adverts/refused" activeClassName="active">
                            <p>Livros recusados</p>
                            <img
                                src={RefusedIcon}
                                width="24"
                                height="24"
                                alt="Ícone de navegação"
                                title="Anúncios recusados"
                            />
                        </NavLink>
                    </nav>
                    <SearchField
                        onChange={e => setNameSearch(e.target.value)}
                        onClick={e => setNameSearch(nameSearch)}
                    />
                </Header>
                <Switch>
                    <Route exact path={path}>
                        <BookList nameSearch={nameSearch} section="all" />
                    </Route>
                    <Route path={`${path}/:type`}>
                        <AdvertRouter nameSearch={nameSearch} />
                    </Route>
                </Switch>
            </Card>
        </Wrapper>
    );
}
