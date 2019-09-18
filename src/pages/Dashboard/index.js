import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Card from '../../components/Card';
import { Wrapper, CardHeader, CardBody, CardFooter, OpenReq, Divider } from './styles';
import profile from '../../assets/icons/profile.svg';
import book from '../../assets/icons/learning.svg';
import addBook from '../../assets/icons/add-book.svg';
import api from '../../services/api';
import Chart from './chart';

export default class Dashboard extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return nextState.totalUsers !== 'loading' || (this.props !== nextProps || this.state !== nextState);
    }
    componentDidMount() {
        try {
            this.loadData();
        } catch (err) {
            console.log(err);
        }
    }
    state = {
        redirect: '',
        totalUsers: 'loading',
        totalBooks: 'loading',
        weeklyBooks: 'loading',
        totalReports: 0,
        totalAdverts: 0
    }
    handleLogout = e => {
        localStorage.removeItem('authKey');
        return this.setState({ redirect: 'login' });
    }
    loadData = async () => {
        const totalUsers = await api.get('/users');
        const totalBooks = await api.get('/books');
        const weeklyBooks = await api.get('/books/week');
        const totalReports = await api.get('/reports');
        const totalAdverts = await api.get('/books?filter=1');
        this.setState({
            totalUsers: totalUsers.data.total,
            totalBooks: totalBooks.data.total,
            weeklyBooks: weeklyBooks.data.count,
            totalReports: totalReports.data.total,
            totalAdverts: totalAdverts.data.total
        });
    }
    handleClickCard = e => {
        return this.setState({ redirect: "users" })
    }
    redirectRequests = e => {
        return this.setState({ redirect: 'adverts' });
    }
    redirectReports = e => {
        return this.setState({ redirect: 'reports' });
    }
    render() {
        switch (this.state.redirect) {
            case "users":
                return <Redirect to="/users" />
            case "adverts":
                return <Redirect to="/adverts" />
            case "reports":
                return <Redirect to="/reports" />
            default:
                return (
                    <Wrapper>
                        <CardHeader>
                            <Card text="Usuarios" qtd={this.state.totalUsers} icon={profile} onClick={this.handleClickCard} />
                            <Card text="Livros Cadastrados" qtd={this.state.totalBooks} icon={book} />
                            <Card text="Novos Livros" qtd={this.state.weeklyBooks} icon={addBook} />
                        </CardHeader>
                        <CardBody>
                            <Chart />
                            <Chart />
                        </CardBody>
                        <CardFooter>
                            <OpenReq>
                                <img src={book} alt="Ícone de requests" width="60" height="60" />
                                <p>{this.state.totalAdverts}<br />Solicitações em <br />aberto</p>
                                <Divider />
                                <h3 onClick={this.redirectRequests}>Ir <br />{'>'}</h3>
                            </OpenReq>
                            <OpenReq >
                                <img src={book} alt="Ícone de denúncias" width="60" height="60" />
                                <p>{this.state.totalReports}<br />Denúncias em <br />aberto</p>
                                <Divider />
                                <h3 onClick={this.redirectReports}>Ir <br />{'>'}</h3>
                            </OpenReq>
                        </CardFooter>
                    </Wrapper>
                );
        }
    }
}
