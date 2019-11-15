import React from "react";
import { Card } from "./style";

export default function Book(props) {
    const { author, title, covers_url } = props.book;
    return (
        <Card>
            <header>
                <img src={covers_url[0].url} alt="Capa do livro" />
                <div>
                    <h1>{title}</h1>
                    <h2>{author}</h2>
                </div>
            </header>
            <button>> Ver</button>
        </Card>
    );
}
