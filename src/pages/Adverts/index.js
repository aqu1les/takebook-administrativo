import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Wrapper, Card, Header, Main, Content, Footer, ModalCard, ModalLeftSide, ModalDivider, ModalRightSide } from "./style";
import { loadAdvertsAction, loadAdvertPage, loadCategoriesAction, updateAdvertAction } from "../../redux/actions";
import Book from "../../components/Adverts/Book";
import Paginate from "../../components/Paginate";
import SearchField from "../../components/SearchField";
import Loading from "../../components/Loading";
import Modal from "../../components/Modal";
import accept from "../../assets/icons/accept.svg";
import refuse from "../../assets/icons/refuse.svg";

export default function Adverts() {
    const dispatch = useDispatch();
    const adverts = useSelector(state => state.adverts.data);
    const dataInfo = useSelector(state => state.adverts);
    const categories = useSelector(state => state.categories.data);
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
    async function getData(e, page) {
        setIsLoading(true);
        const action = await dispatch(loadAdvertPage(page));
        if (!action) return setIsLoading(false);
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
                <Footer>
                    <Paginate onClick={(e, page) => getData(e, page)} dataInfo={dataInfo} />
                </Footer>
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