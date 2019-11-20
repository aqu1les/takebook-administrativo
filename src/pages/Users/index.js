import React, { Component } from 'react';
import { Wrapper, Card, Header, Main, Content, Footer, Li, ModalCard, ModalForm } from "./style";
import SearchField from "../../components/SearchField";
import Modal from "../../components/Modal";
import PopUp from "../../components/Popup";
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
        modalOpen: false,
        modalUser: {
            address_city: "",
            address_neighborhood: "",
            address_number: "",
            address_state: "",
            address_street: "",
            address_zip_code: "",
            avatar_url: "",
            email: "",
            first_name: "",
            last_name: ""
        },
        loading: true,
        notify: {}
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
        this.setState({
            users: this.state.users.concat(response.data.data),
            usersPages: { ...response.data, data: null },
            filtered: this.state.users.concat(response.data.data),
            loading: false
        });
    }
    handleChange = e => {
        return this.setState({
            modalUser: {
                ...this.state.modalUser,
                [e.target.name]: e.target.value
            }
        });
    }
    openModal = (id, e) => {
        return this.setState({ modalOpen: true, modalUser: this.state.users.find(ad => ad.id === id) });
    }
    closeModal = () => {
        return this.setState({ modalOpen: false });
    }
    removeUser = (id, e) => {
        return console.log(id);
    }
    updateUser = async (e) => {
        e.preventDefault();
        console.log(this.state.modalUser);
        const response = await api.put(`/users/${this.state.modalUser.id}`, this.state.modalUser);
        !response ? this.notifyError("Erro no servidor!") : this.notifySuccess("Usuário atualizado!");
        return this.setState({ modalOpen: false });
    }
    notifyError(msg) {
        this.setState({ notify: { show: true, notificationMessage: msg, variant: "danger" } });
        setTimeout(() => {
            this.setState({ notify: false });
        }, 3000);
    }
    notifySuccess(msg) {
        this.setState({
            notify: {
                show: true,
                notificationMessage: msg,
                variant: "success"
            }
        });
        setTimeout(() => {
            this.setState({ notify: false });
        }, 3000);
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
                        <PopUp show={this.state.notify.show} msg={this.state.notify.notificationMessage} variant={this.state.notify.variant} />
                        <header>
                            <h1>Dados do Usuário</h1>
                            <img src={closeIcon} alt="" onClick={this.closeModal} />
                        </header>
                        <div id="divider"></div>
                        <ModalForm>
                            <h2>Dados Pessoais</h2>
                            <div className="form-group">
                                <label>Nome</label>
                                <input type="text" value={`${this.state.modalUser.first_name || ""} ${this.state.modalUser.last_name || ""}`} readOnly />
                            </div>
                            <div className="form-group">
                                <label>E-mail</label>
                                <input type="text" value={this.state.modalUser.email || ""} readOnly />
                            </div>
                            <h2>Endereço</h2>
                            <div className="row">
                                <div className="form-group">
                                    <label>CEP</label>
                                    <input name="address_zip_code" value={this.state.modalUser.address_zip_code || ""} onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <label>Rua</label>
                                    <input type="text" name="address_street" value={this.state.modalUser.address_street || ""} onChange={this.handleChange} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group">
                                    <label>Número</label>
                                    <input type="text" name="address_number" value={this.state.modalUser.address_number || ""} onChange={this.handleChange} />
                                </div>

                                <div className="form-group">
                                    <label>Cidade</label>
                                    <input name="address_city" value={this.state.modalUser.address_city || ""} onChange={this.handleChange} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group">
                                    <label>Bairro</label>
                                    <input type="text" name="address_neighborhood" value={this.state.modalUser.address_neighborhood || ""} onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <label>Estado</label>
                                    <input type="text" name="address_state" value={this.state.modalUser.address_state || ""} onChange={this.handleChange} />
                                </div>
                            </div>
                            <button onClick={this.updateUser}>Salvar</button>
                        </ModalForm>
                    </ModalCard>
                </Modal>
            </Wrapper>
        );
    }
}