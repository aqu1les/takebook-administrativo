import React from "react";
import { Card } from "./style";

export default function Book(props) {
    const { author, title, covers_url } = props.book;
    return (
        <Card>
            <header>
                <img src={covers_url[0].url} alt="Capa do livro" />
                <div>
                    <h2>{title}</h2>
                    <h3>{author}</h3>
                </div>
            </header>
            <button onClick={props.onClick}>> Ver</button>
        </Card>
    );
}
