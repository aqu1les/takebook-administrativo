import React, { Component } from 'react';
import { Wrapper, Card, Header, Main, Content, Footer, Li, ModalCard, ModalForm } from "./style";
import SearchField from "../../components/SearchField";
import Modal from "../../components/Modal";
import api from "../../services/api";
import userIcon from "../../assets/icons/defaultProfile.svg";
import deleteIcon from "../../assets/icons/delete.svg";
import updateIcon from "../../assets/icons/edit.svg";
import closeIcon from "../../assets/icons/close.svg";

export default class Users extends Component {
    state = {
        users: [],
        filtered: [],
        usersPages: [],
        modalOpen: true,
        userModal: {
            address_city: "",
            address_neighborhood: "",
            address_number: "",
            address_state: "",
            address_street: "",
            address_zip_code: "",
            avatar_url: "",
            email: "",
            first_name: "",
            last_name: "",
            likes: []
        },
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
        const response = await api.get("/users");
        console.log(response.data);
        this.setState({
            users: this.state.users.concat(response.data.data),
            usersPages: { ...response.data, data: null },
            filtered: this.state.users.concat(response.data.data),
            loading: false
        });
    }
    openModal = (id, e) => {
        return this.setState({ modalOpen: true, userModal: this.state.users.find(ad => ad.id === id) });
    }
    closeModal = () => {
        return this.setState({ modalOpen: false });
    }
    removeUser = (id, e) => {
        return console.log(id);
    }
    render() {
        const paginate = [];
        if (this.state.usersPages) {
            for (let i = 1; i <= this.state.usersPages.last_page; i++) {
                const li = <li key={i}>
                    <button onClick={(e) => this.getData(e, i)} className={this.state.usersPages.current_page === i ? "active" : ""} disabled={this.state.usersPages.current_page === i ? true : false}>{i}</button>
                </li>;
                paginate.push(li);
            }
        }

        return (
            <Wrapper>
                <h2>Usuários</h2>
                <Card>
                    <Header>
                        <SearchField />
                    </Header>
                    <Main>
                        <h2>Resultado</h2>
                        <Content>
                            <ul>
                                {this.state.filtered.length > 0 ?
                                    this.state.filtered.map(user => (
                                        <Li key={user.id}>
                                            <p>{user.id}</p>
                                            <img src={user.avatar_url ? user.avatar_url : userIcon} alt="" />
                                            <p>{user.first_name} {user.last_name}</p>
                                            <div>
                                                <button onClick={(e) => this.removeUser(user.id, e)}>
                                                    <span>
                                                        <img src={deleteIcon} alt="" />
                                                        Excluir
                                                    </span>
                                                </button>
                                                <button onClick={(e) => this.openModal(user.id, e)}>
                                                    <span>
                                                        <img src={updateIcon} alt="" />
                                                        Editar
                                                    </span>
                                                </button>
                                            </div>
                                        </Li>
                                    )) : "Nenhum usuário está cadastrado!"
                                }
                            </ul>
                        </Content>
                    </Main>
                    <Footer>
                        <ul>
                            <li><button onClick={(e) => this.getData(e, 1)} disabled={!this.state.usersPages.prev_page_url}>First Page</button></li>
                            {paginate}
                            <li><button onClick={(e) => this.getData(e, this.state.usersPages.last_page)} disabled={!this.state.usersPages.next_page_url}>Last Page</button></li>
                        </ul>
                    </Footer>
                </Card>
                <Modal open={this.state.modalOpen} click={this.closeModal}>
                    <ModalCard>
                        <header>
                            <h1>Dados do Usuário</h1>
                            <img src={closeIcon} alt="" onClick={this.closeModal} />
                        </header>
                        <div id="divider"></div>
                        <ModalForm>
                            <h2>Dados Pessoais</h2>
                            <div className="form-group">
                                <label>Nome</label>
                                <input />
                            </div>
                            <div className="form-group">
                                <label>CPF</label>
                                <input />
                            </div>
                            <h2>Endereço</h2>
                            <div className="form-group">
                                <label>CEP</label>
                                <input />
                            </div>
                            <div className="row">
                                <div className="form-group">
                                    <label>Bairro</label>
                                    <input />
                                </div>
                                <div className="form-group">
                                    <label>Rua</label>
                                    <input />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group">
                                    <label>Número</label>
                                    <input />
                                </div>
                                <div className="form-group">
                                    <label>Complemento</label>
                                    <input />
                                </div>
                            </div>
                            <button onClick={() => console.log("submitou viado")}>Salvar</button>
                        </ModalForm>
                    </ModalCard>
                </Modal>
            </Wrapper>
        );
    }
}