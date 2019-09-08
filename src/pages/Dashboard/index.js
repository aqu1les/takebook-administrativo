import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { checkAuth } from '../../validations';
import Card from '../../components/Card';
import { Wrapper, CardHeader, CardBody, CardFooter, OpenReq, Divider } from './styles';
import profile from '../../assets/icons/profile.svg';
import book from '../../assets/icons/learning.svg';
import addBook from '../../assets/icons/add-book.svg';
import api from '../../services/api';

export default class Dashboard extends Component {
    async componentDidMount() {
        const checked = await checkAuth();
        if (!checked) return this.setState({ redirect: "auth" });
        this.countUsers();
    }
    state = {
        redirect: '',
        totalUsers: 0,
    }
    handleLogout = e => {
        localStorage.removeItem('authKey');
        return this.props.history.push('/auth');
    }

    countUsers = async () => {
        const response = await api.get('/users', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('authKey')}`
            }
        });

        return this.setState({ totalUsers: response.data.total });
    }

    handleClickCard = e => {
        return this.setState({ redirect: "users" })
    }
    render() {
        switch (this.state.redirect) {
            case "auth":
                return <Redirect to="/auth" />
            case "users":
                return <Redirect to="/users" />
            default:
                return (
                    <Wrapper>
                        <CardHeader>
                            <Card text="Usuarios" qtd={this.state.totalUsers} icon={profile} onClick={this.handleClickCard} />
                            <Card text="Livros Cadastrados" qtd="34" icon={book} />
                            <Card text="Novos Livros" qtd="1234" icon={addBook} />
                        </CardHeader>
                        <CardBody>
                            STAT
                    </CardBody>
                        <CardFooter>
                            <OpenReq>
                                <img src={book} alt="Ícone de requests" width="60" height="60" />
                                <p>40<br />Solicitações em <br />aberto</p>
                                <Divider />
                                <h3>Ir <br />{'>'}</h3>
                            </OpenReq>
                            <OpenReq>
                                <img src={book} alt="Ícone de requests" width="60" height="60" />
                                <p>40<br />Denúncias em <br />aberto</p>
                                <Divider />
                                <h3>Ir <br />{'>'}</h3>
                            </OpenReq>
                        </CardFooter>
                    </Wrapper>
                )
        }
    }
}
