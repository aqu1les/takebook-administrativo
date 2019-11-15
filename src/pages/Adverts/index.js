import React, { Component } from 'react';
import { Wrapper, Card, Header, Search, Main, Content } from './style';
import api from '../../services/api';
import searchIcon from '../../assets/icons/search.svg';
import Book from '../../components/Adverts/Book';

export default class Adverts extends Component {

    state = {
        adverts: []
    }

    componentDidMount() {
        try {
            this.loadData();
        } catch (err) {
            console.log(err);
        }
    }

    loadData = async () => {
        const response = await api.get('/books/validate');
        console.log(response.data);
        this.setState({ adverts: this.state.adverts.concat(response.data.data) });
        return console.log(this.state);
    }

    render() {
        return (
            <Wrapper>
                <h2>Anúncios</h2>
                <Card>
                    <Header>
                        <Search>
                            <input type="text" name="filter" placeholder="Pesquisar" />
                            <button onClick={this.searchAdvert}>
                                <img src={searchIcon} alt="Search icon" />
                            </button>
                        </Search>
                    </Header>
                    <Main>
                        <h2>Resultado</h2>
                        <Content>
                            {this.state.adverts.map(ad => (
                                <Book book={ad} key={ad.id} />
                            ))}
                        </Content>
                    </Main>
                </Card>
            </Wrapper>
        );
    }
}