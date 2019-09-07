import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { checkAuth } from '../../validations';
import Card from '../../components/Card';
import { Wrapper, CardHeader, CardBody, CardFooter, OpenReq, Section } from './styles';
import profile from '../../assets/icons/profile.svg';
import book from '../../assets/icons/learning.svg';
import addBook from '../../assets/icons/add-book.svg';

export default class Dashboard extends Component {
    async componentDidMount() {
        const checked = await checkAuth();
        if (!checked) return this.setState({ toLogin: true });
    }
    state = {
        toLogin: false
    }
    handleLogout = e => {
        localStorage.removeItem('authKey');
        return this.props.history.push('/auth');
    }

    render() {
        return this.state.toLogin ? <Redirect to="/auth" /> :
            <Wrapper>
                <CardHeader>
                    <Card text="Novos Usuarios" qtd="123" icon={profile} />
                    <Card text="Livros Cadastrados" qtd="34" icon={book} />
                    <Card text="Novos Livros" qtd="1234" icon={addBook} />
                </CardHeader>
                <CardBody>
                    <Section>
                        ESTATISTICAS CARALHOAIDJKANSDUJASJK
                    </Section>
                </CardBody>
                <CardFooter>
                    <OpenReq>

                    </OpenReq>
                    <OpenReq>

                    </OpenReq>
                </CardFooter>
            </Wrapper>
    }
}
