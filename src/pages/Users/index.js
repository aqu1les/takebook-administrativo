import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Wrapper, Card, Header, Main, Content, Li, ModalCard, ModalForm } from "./style";
import { loadUsersAction, updateUserAction } from "../../redux/actions";
import SearchField from "../../components/SearchField";
import Modal from "../../components/Modal";
import PopUp from "../../components/Popup";
import Loading from "../../components/Loading";
import userIcon from "../../assets/icons/defaultProfile.svg";
import deleteIcon from "../../assets/icons/delete.svg";
import updateIcon from "../../assets/icons/edit.svg";
import closeIcon from "../../assets/icons/close.svg";

export default function Users() {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users)
    const [isLoading, setIsLoading] = useState(false);
    const [nameSearch, setNameSearch] = useState("");
    const [modalOpen, setModalOpen] = useState(false);
    const [modalUser, setModalUser] = useState({});
    const [notify, setNotify] = useState({ show: false });

    useEffect(() => {
        setIsLoading(true);
        dispatch(loadUsersAction());
        setIsLoading(false);
    }, [dispatch, users.length]);

    let filtered = users ? users.filter(user => `${user.first_name} ${user.last_name}`.toLowerCase().indexOf(nameSearch.toLowerCase()) !== -1) : [];

    function notifyError(msg) {
        setNotify({
            show: true,
            notificationMessage: msg,
            variant: "danger"
        });
        setTimeout(() => {
            setNotify({ show: false });
        }, 3000);
    }
    function notifySuccess(msg) {
        setNotify({
            show: true,
            notificationMessage: msg,
            variant: "success"
        });
        setTimeout(() => {
            setNotify({ show: false });
        }, 3000);
    }

    function openModal(id, e) {
        e.preventDefault();
        setModalOpen(true);
        setModalUser(users.find(user => user.id === id));
    }

    function closeModal(e) {
        e.preventDefault();
        setModalOpen(false);
        setModalUser({});
    }

    function handleChange(e) {
        setModalUser({ ...modalUser, [e.target.name]: e.target.value });
    }

    async function updateUser(e) {
        e.preventDefault();
        const action = await dispatch(updateUserAction(modalUser));
        if (!action || action.error) return notifyError(action.error || "Erro no servidor.");
        return notifySuccess("Usuário alterado!");
    }

    return (
        <Wrapper>
            <h2>Usuários</h2>
            <Card>
                <Header>
                    <SearchField onChange={(e) => setNameSearch(e.target.value)} onClick={(e) => setNameSearch(nameSearch)} />
                </Header>
                <Main>
                    <h2>Resultado</h2>
                    <Content>
                        {isLoading ? <Loading /> :
                            <ul>
                                {filtered.map(user => (
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
                                            <button onClick={(e) => openModal(user.id, e)}>
                                                <span>
                                                    <img src={updateIcon} alt="" />
                                                    Editar
                                                </span>
                                            </button>
                                        </div>
                                    </Li>
                                ))
                                }
                            </ul>
                        }
                    </Content>
                </Main>
            </Card>
            <Modal open={modalOpen} click={closeModal}>
                <ModalCard>
                    <PopUp show={notify.show} msg={notify.notificationMessage} variant={notify.variant} />
                    <header>
                        <h1>Dados do Usuário</h1>
                        <img src={closeIcon} alt="" onClick={closeModal} />
                    </header>
                    <div id="divider"></div>
                    <ModalForm>
                        <h2>Dados Pessoais</h2>
                        <div className="form-group">
                            <label>Nome</label>
                            <input type="text" value={`${modalUser.first_name || ""} ${modalUser.last_name || ""}`} readOnly />
                        </div>
                        <div className="form-group">
                            <label>E-mail</label>
                            <input type="text" value={modalUser.email || ""} readOnly />
                        </div>
                        <h2>Endereço</h2>
                        <div className="row">
                            <div className="form-group">
                                <label>CEP</label>
                                <input name="address_zip_code" value={modalUser.address_zip_code || ""} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label>Rua</label>
                                <input type="text" name="address_street" value={modalUser.address_street || ""} onChange={handleChange} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group">
                                <label>Número</label>
                                <input type="text" name="address_number" value={modalUser.address_number || ""} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label>Bairro</label>
                                <input type="text" name="address_neighborhood" value={modalUser.address_neighborhood || ""} onChange={handleChange} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group">
                                <label>Cidade</label>
                                <input name="address_city" value={modalUser.address_city || ""} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label>Estado</label>
                                <input type="text" name="address_state" value={modalUser.address_state || ""} onChange={handleChange} />
                            </div>
                        </div>
                        <button onClick={updateUser}>Salvar</button>
                    </ModalForm>
                </ModalCard>
            </Modal>
        </Wrapper>
    );
}
/*notifyError(msg) {
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
}*/