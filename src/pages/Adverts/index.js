import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Wrapper, Card, Header, Main, Content, ModalCard, ModalLeftSide, ModalDivider, ModalRightSide } from "./style";
import { loadAdvertsAction, loadCategoriesAction, updateAdvertAction } from "../../redux/actions";
import Book from "../../components/Adverts/Book";
import SearchField from "../../components/SearchField";
import Loading from "../../components/Loading";
import Modal from "../../components/Modal";
import accept from "../../assets/icons/accept.svg";
import refuse from "../../assets/icons/refuse.svg";

export default function Adverts() {
    const dispatch = useDispatch();
    const adverts = useSelector(state => state.adverts);
    const categories = useSelector(state => state.categories);
    const [isLoading, setIsLoading] = useState(false);
    const [nameSearch, setNameSearch] = useState("");
    const [modalOpen, setModalOpen] = useState(false);
    const [modalAdvert, setModalAdvert] = useState({ covers_url: [] });

    useEffect(() => {
        setIsLoading(true);
        dispatch(loadAdvertsAction());
        dispatch(loadCategoriesAction());
        setIsLoading(false);
    }, [dispatch]);

    let filtered = adverts ? adverts.filter(ad => ad.title.toLowerCase().indexOf(nameSearch.toLowerCase()) !== -1) : [];

    async function openModal(id, e) {
        e.preventDefault();
        setModalOpen(true);
        await setModalAdvert(adverts.find(ad => ad.id === id));
        return changeCover();
    }

    function changeCover(index = 0) {
        const x = document.getElementsByClassName("slide");
        for (let i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        if (index >= 0) {
            if (index >= x.length) index = 0;
            return x[index].style.display = "block";
        } else {
            if (x[0]) x[0].style.display = "block";
        }
    }
    async function acceptBook() {
        setModalAdvert({ ...modalAdvert, status_id: 2 });
        const check = await updateBook();
        if (check) return console.error(check);
        setModalOpen(false);
    }
    async function refuseBook() {
        setModalAdvert({ ...modalAdvert, status_id: 3 });
        const check = await updateBook();
        if (check) return console.error(check);
        setModalOpen(false);
    }
    async function updateBook() {
        const action = await dispatch(updateAdvertAction(modalAdvert));
        if (!action || action.error) return action.error;
        return;
    }

    return (
        <Wrapper>
            <h2 id="page">Anúncios</h2>
            <Card>
                <Header>
                    <SearchField onChange={(e) => setNameSearch(e.target.value)} onClick={(e) => setNameSearch(nameSearch)} />
                </Header>
                <Main>
                    <h2>Resultado</h2>
                    <Content>
                        {isLoading ?
                            <Loading /> :
                            filtered.map(ad => (
                                <Book book={ad} key={ad.id} onClick={(e) => openModal(ad.id, e)} />
                            ))
                        }
                    </Content>
                </Main>
            </Card>
            <Modal open={modalOpen} click={() => setModalOpen(false)}>
                <ModalCard>
                    <ModalLeftSide>
                        <div id="covers">
                            {modalAdvert.covers_url.map((cover, index) => (
                                <div key={index} className="slide">
                                    <img src={cover.url} alt="Book" />
                                    <button onClick={(e) => changeCover(index + 1)}></button>
                                </div>
                            ))}
                        </div>
                        <div id="buttons">
                            <img src={refuse} alt="Refuse Button" onClick={refuseBook} title="Recusar" />
                            <img src={accept} alt="Accept Button" onClick={acceptBook} title="Aceitar" />
                        </div>
                    </ModalLeftSide>
                    <ModalDivider />
                    <ModalRightSide>
                        <form>
                            <label htmlFor="title">Título do anúncio</label>
                            <input type="text" id="title" placeholder={modalAdvert.title} disabled />

                            <label htmlFor="author">Autor do livro</label>
                            <input type="text" id="author" placeholder={modalAdvert.author} disabled />

                            <div className="row">
                                <div>
                                    <label htmlFor="status">Estado</label>
                                    <select id="status" disabled placeholder={modalAdvert.status}>
                                        <option value="0" >Novo</option>
                                        <option value="1">Usado</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="price">Preço</label>
                                    <input id="price" placeholder={modalAdvert.price} disabled />
                                </div>
                            </div>

                            <label htmlFor="categories">Categorias</label>
                            <div id="categories">
                                {categories.map(cat => (
                                    <div key={cat.id}>
                                        <input type="checkbox" id={cat.name} defaultChecked={true || false} />
                                        <label htmlFor={cat.name}>{cat.name}</label>
                                    </div>
                                ))}
                            </div>
                            <label>Descrição</label>
                            <textarea placeholder={modalAdvert.description} disabled ></textarea>
                        </form>
                    </ModalRightSide>
                </ModalCard>
            </Modal>
        </Wrapper>
    );
}

/*export default class Adverts extends Component {

    searchAdvert = () => {
        const title = this.state.filterByTitle;
        const filtered = this.state.adverts.filter(ad => ad.title === title);
        return this.setState({ filtered });
    }
    render() {
        const paginate = [];
        let body = this.state.filtered.length > 0 ?
            this.state.filtered.map(ad => (
                <Book book={ad} key={ad.id} onClick={(e) => this.openModal(ad.id, e)} />
            ))
            :
            "Nenhum livro foi encontrado!";

        for (let i = 1; i <= this.state.advPages.last_page; i++) {
            const li = <li key={i}>
                <button onClick={(e) => this.getData(e, i)} className={this.state.advPages.current_page === i ? "active" : ""} disabled={this.state.advPages.current_page === i ? true : false}>{i}</button>
            </li>;
            paginate.push(li);
        }

    }
}*/