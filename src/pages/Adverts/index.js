import React, { Component } from "react";
import { Wrapper, Card, Header, Main, Content, Footer, ModalCard, ModalLeftSide, ModalDivider, ModalRightSide, Holder } from "./style";
import api from "../../services/api";
import Book from "../../components/Adverts/Book";
import SearchField from "../../components/SearchField";
import Modal from "../../components/Modal";
import accept from "../../assets/icons/accept.svg";
import refuse from "../../assets/icons/refuse.svg";

export default class Adverts extends Component {

    state = {
        adverts: [],
        advPages: {
            current_page: "",
            last_page: "",
            prev_page_url: "",
            next_page_url: ""
        },
        filtered: [],
        filterByTitle: "",
        modalOpen: false,
        modalBook: {
            id: "",
            author: "",
            count_likes: "",
            covers_url: [{
                id: "",
                url: ""
            }],
            description: "",
            price: "",
            title: "",
            user: {}
        },
        categories: [],
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
        const categoriesResponse = await api.get("/categories");
        this.setState({
            adverts: this.state.adverts.concat(response.data.data),
            advPages: { ...response.data, data: null },
            filtered: this.state.adverts.concat(response.data.data),
            categories: this.state.categories.concat(categoriesResponse.data.data),
            loading: false
        });
    }
    handleChange = e => {
        if (!e.target.value) {
            return this.setState({
                filterByTitle: e.target.value,
                filtered: this.state.adverts
            });
        }
        return this.setState({
            filterByTitle: e.target.value,
            filtered: this.state.adverts.filter(
                (book) => {
                    return book.title.toLowerCase()
                        .indexOf(this.state.filterByTitle.toLowerCase()) !== -1;
                }
            )
        });
    }
    searchAdvert = () => {
        const title = this.state.filterByTitle;
        const filtered = this.state.adverts.filter(ad => ad.title === title);
        return this.setState({ filtered });
    }
    openModal = async (id, e) => {
        await this.setState({ modalOpen: true, modalBook: this.state.adverts.find(ad => ad.id === id) });
        return this.changeCover();
    }
    closeModal = () => {
        this.changeCover();
        return this.setState({ modalOpen: false });
    }
    changeCover = (index) => {
        const x = document.getElementsByClassName("slide");
        let slideIndex = index;
        for (let i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        if (index >= 0) {
            if (index >= x.length) slideIndex = 0;

            return x[slideIndex].style.display = "block";
        } else {
            if (x[0]) x[0].style.display = "block";
        }
    }
    acceptBook = async () => {
        const book = this.state.modalBook;
        book.status_id = 2;
        const { data } = await api.put(`/books/${this.state.modalBook.id}/status`, book);
        this.setState({
            modalOpen: false,
            adverts: this.state.adverts.filter(ad => ad.id !== data.id),
            filtered: this.state.adverts.filter(ad => ad.id !== data.id)
        });
    }
    refuseBook = async () => {
        const book = this.state.modalBook;
        book.status_id = 3;
        const { data } = await api.put(`/books/${this.state.modalBook.id}/status`, book);
        this.setState({
            modalOpen: false,
            adverts: this.state.adverts.filter(ad => ad.id !== data.id),
            filtered: this.state.adverts.filter(ad => ad.id !== data.id)
        });
    }
    getData = async (e, page) => {
        this.setState({ loading: true });
        const response = await api.get(`/books/validate?page=${page}`);
        this.setState({
            adverts: response.data.data,
            advPages: { ...response.data, data: null },
            filtered: response.data.data,
            loading: false
        });
    }

    render() {
        const holder = [];
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

        for (let i = 1; i <= 12; i++) {
            const bookCard = <Holder key={i} />;
            holder.push(bookCard);
        }

        return (
            <Wrapper>
                <h2 id="page">Anúncios</h2>
                <Card>
                    <Header>
                        <SearchField onChange={this.handleChange} onClick={this.searchAdvert} />
                    </Header>
                    <Main>
                        <h2>Resultado</h2>
                        <Content>
                            {this.state.loading ? holder : body}
                        </Content>
                    </Main>
                    <Footer>
                        <ul>
                            <li><button onClick={(e) => this.getData(e, 1)} disabled={!this.state.advPages.prev_page_url}>First Page</button></li>
                            {paginate}
                            <li><button onClick={(e) => this.getData(e, this.state.advPages.last_page)} disabled={!this.state.advPages.next_page_url}>Last Page</button></li>
                        </ul>
                    </Footer>
                </Card>
                <Modal open={this.state.modalOpen} click={this.closeModal}>
                    <ModalCard>
                        <ModalLeftSide>
                            <div id="covers">
                                {this.state.modalBook.covers_url.map((cover, index) => (
                                    <div key={index} className="slide">
                                        <img src={cover.url} alt="Book" />
                                        <button onClick={() => this.changeCover(index + 1)}></button>
                                    </div>
                                ))}
                            </div>
                            <div id="buttons">
                                <img src={refuse} alt="Refuse Button" onClick={this.refuseBook} title="Recusar" />
                                <img src={accept} alt="Accept Button" onClick={this.acceptBook} title="Aceitar" />
                            </div>
                        </ModalLeftSide>
                        <ModalDivider />
                        <ModalRightSide>
                            <form>
                                <label htmlFor="title">Título do anúncio</label>
                                <input type="text" id="title" value={this.state.modalBook.title} disabled />

                                <label htmlFor="author">Autor do livro</label>
                                <input type="text" id="author" value={this.state.modalBook.author} disabled />

                                <div className="row">
                                    <div>
                                        <label htmlFor="status">Estado</label>
                                        <select id="status" disabled value={this.state.modalBook.status}>
                                            <option value="0" >Novo</option>
                                            <option value="1">Usado</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="price">Preço</label>
                                        <input id="price" value={this.state.modalBook.price} disabled />
                                    </div>
                                </div>

                                <label htmlFor="categories">Categorias</label>
                                <div id="categories">
                                    {this.state.categories.map(cat => (
                                        <div key={cat.id}>
                                            <input type="checkbox" id={cat.name} />
                                            <label htmlFor={cat.name}>{cat.name}</label>
                                        </div>
                                    ))}
                                </div>
                                <label>Descrição</label>
                                <textarea value={this.state.modalBook.description} disabled></textarea>
                            </form>
                        </ModalRightSide>
                    </ModalCard>
                </Modal>
            </Wrapper>
        );
    }
}