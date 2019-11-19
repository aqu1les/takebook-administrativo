import React, { Component } from 'react';
import { Wrapper, Card, Header, Main, Content } from "./style";
import api from "../../services/api";
import SearchField from "../../components/SearchField";

export default class Users extends Component {
    state = {
        users: [],
        loading: true
    }

    componentDidMount() {
        try {
            this.loadData();
        } catch (err) {
            console.log(err);
        }
    }

    loadData = async () => {
        const response = await api.get("/books/validate");
        console.log(response.data);
        this.setState({
            users: this.state.users.concat(response.data.data),
            usersPages: { ...response.data, data: null },
            filtered: this.state.users.concat(response.data.data),
            loading: false
        });
    }
    render() {
        return (
            <Wrapper>
                <h2>Usuários</h2>
                <Card>
                    <Header>
                        <SearchField />
                    </Header>
                    <Main>
                        <h2>Resultado</h2>
                        <Content></Content>
                    </Main>
                </Card>
            </Wrapper>
        );
    }
}