import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import jQuery from 'jquery';
import {
    ModalCard,
    ModalLeftSide,
    ModalDivider,
    ModalRightSide,
} from './style';
import Modal from '../../../components/Modal';
import accept from '../../../assets/icons/accept.svg';
import refuse from '../../../assets/icons/refuse.svg';
import { updateAdvertAction } from '../../../redux/Actions/adverts';
import Cover from './Cover';

export default function BookInfoModal({ advertID }) {
    const dispatch = useDispatch();
    const history = useHistory();
    const advert = useSelector(state =>
        state.adverts.all.data.find(ad => Number(ad.id) === Number(advertID))
    );
    const categories = useSelector(state => state.categories.data);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalAdvert, setModalAdvert] = useState({});

    useEffect(() => {
        if (advert) {
            setModalAdvert(advert);
            setModalOpen(true);
            // changeCover();
        }
    }, [advert]);

    function changeCover(index = 0) {
        const x = jQuery('.slide');
        for (let i = 0; i < x.length; i++) {
            x[i].style.display = 'none';
        }
        if (index >= 0) {
            if (index >= x.length) index = 0;
            return (x[index].style.display = 'block');
        } else {
            if (x[0]) x[0].style.display = 'block';
        }
    }

    async function acceptBook() {
        modalAdvert.status_id = 2
        setModalAdvert({ modalAdvert });
        const check = await updateBook();
        if (check) return console.error(check);
        closeModal();
    }

    async function refuseBook() {
        modalAdvert.status_id = 3

        setModalAdvert({ modalAdvert });
        const check = await updateBook();
        if (check) return console.error(check);
        closeModal();
    }

    async function updateBook() {
        const action = await dispatch(updateAdvertAction(modalAdvert));
        if (!action || action.error) return action.error;
    }

    function closeModal() {
        setModalOpen(false);
        history.goBack();
    }
    
    return modalOpen && modalAdvert.covers_url ? (
        <Modal open={modalOpen} click={closeModal}>
            <ModalCard>
                <ModalLeftSide>
                    <div id="covers">
                        {modalAdvert.covers_url.map((cover, index) => (
                            
                            <Cover
                                key={index}
                                url={cover.url}
                                onClick={e => changeCover(index + 1)}
                            />
                        ))}
                    </div>
                    <div id="buttons">
                        <img
                            src={refuse}
                            alt="Refuse Button"
                            onClick={refuseBook}
                            title="Recusar"
                        />
                        <img
                            src={accept}
                            alt="Accept Button"
                            onClick={acceptBook}
                            title="Aceitar"
                        />
                    </div>
                </ModalLeftSide>
                <ModalDivider />
                <ModalRightSide>
                    <form>
                        <label htmlFor="title">Título do anúncio</label>
                        <input
                            type="text"
                            id="title"
                            placeholder={modalAdvert.title}
                            disabled
                        />

                        <label htmlFor="author">Autor do livro</label>
                        <input
                            type="text"
                            id="author"
                            placeholder={modalAdvert.author}
                            disabled
                        />

                        <div className="row">
                            <div>
                                <label htmlFor="status">Estado</label>
                                <select
                                    id="status"
                                    disabled
                                    placeholder={modalAdvert.status}
                                >
                                    <option value="0">Novo</option>
                                    <option value="1">Usado</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="price">Preço</label>
                                <input
                                    id="price"
                                    placeholder={modalAdvert.price}
                                    disabled
                                />
                            </div>
                        </div>

                        <label htmlFor="categories">Categorias</label>
                        <div id="categories">
                            {categories.map(cat => (
                                <div key={cat.id}>
                                    <input
                                        type="checkbox"
                                        id={cat.name}
                                        defaultChecked={
                                            modalAdvert.categories.find(
                                                bCat => bCat.id === cat.id
                                            )
                                                ? true
                                                : false
                                        }
                                    />
                                    <label htmlFor={cat.name}>{cat.name}</label>
                                </div>
                            ))}
                        </div>
                        <label>Descrição</label>
                        <textarea
                            placeholder={modalAdvert.description}
                            disabled
                        ></textarea>
                    </form>
                </ModalRightSide>
            </ModalCard>
        </Modal>
    ) : (
        <></>
    );
}
