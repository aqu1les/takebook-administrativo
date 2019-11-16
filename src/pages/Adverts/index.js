import React, { Component } from "react";
import { Wrapper, Card, Header, Main, Content, ModalCard, ModalLeftSide, ModalDivider, ModalRightSide } from "./style";
import api from "../../services/api";
import Book from "../../components/Adverts/Book";
import SearchField from "../../components/SearchField";
import Modal from "../../components/Modal";
import accept from "../../assets/icons/accept.svg";
import refuse from "../../assets/icons/refuse.svg";

export default class Adverts extends Component {

    state = {
        adverts: [],
        filtered: [],
        filterByTitle: "",
        modalOpen: false,
        modalBook: {
            id: null,
            author: null,
            count_likes: null,
            covers_url: [{
                id: null,
                url: null
            }],
            description: null,
            price: null,
            title: null,
            user: {}
        }
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
            adverts: this.state.adverts.concat(response.data.data),
            filtered: this.state.adverts.concat(response.data.data)
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
        return this.setState({ modalOpen: false });
    }
    changeCover = (index) => {
        const x = document.getElementsByClassName("slide");
        let slideIndex = index;
        if (index >= 0) {
            if (index >= x.length) slideIndex = 0;
            for (let i = 0; i < x.length; i++) {
                x[i].style.display = "none";
            }
            return x[slideIndex].style.display = "block";
        } else {
            if (x[0]) x[0].style.display = "block";
        }
    }

    render() {
        let body = this.state.filtered.length > 0 ?
            this.state.filtered.map(ad => (
                <Book book={ad} key={ad.id} onClick={(e) => this.openModal(ad.id, e)} />
            ))
            :
            "Nenhum livro foi encontrado!";

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
                            {body}
                        </Content>
                    </Main>
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
                            <div>
                                <img src={refuse} alt="Refuse Button" />
                                <img src={accept} alt="Accept Button" />
                            </div>
                        </ModalLeftSide>
                        <ModalDivider />
                        <ModalRightSide></ModalRightSide>
                    </ModalCard>
                </Modal>
            </Wrapper>
        );
    }
}