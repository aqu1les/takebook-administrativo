import React, { Component } from "react";
import { Wrapper } from "./style";
import api from "../../services/api";

export default class Dashboard extends Component {
    componentDidMount() {
        try {
            this.loadData();
        } catch (err) {
            console.log(err);
        }
    }
    state = {
        totalUsers: "loading",
        totalBooks: "loading",
        weeklyBooks: "loading",
        totalReports: 0,
        totalAdverts: 0
    }
    loadData = async () => {
        const totalUsers = await api.get("/users");
        const totalBooks = await api.get("/books");
        const weeklyBooks = await api.get("/books/week");
        const totalReports = await api.get("/reports");
        const totalAdverts = await api.get("/books/validate");
        this.setState({
            totalUsers: totalUsers.data.total,
            totalBooks: totalBooks.data.total,
            weeklyBooks: weeklyBooks.data.count,
            totalReports: totalReports.data.total,
            totalAdverts: totalAdverts.data.total
        });
    }
    render() {
        return (
            <Wrapper>
                <h2>Página Inicial</h2>
            </Wrapper>
        );
    }
}
