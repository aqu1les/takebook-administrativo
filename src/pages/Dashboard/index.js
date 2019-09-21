import React, { Component } from "react";
import { Wrapper } from "./style";
import api from "../../services/api";
import axios from 'axios';

export default class Dashboard extends Component {
    signal = axios.CancelToken.source();
    componentDidMount() {
        try {
            this.loadData();
        } catch (err) {
            console.log(err);
        }
    }
    state = {
        totalUsers: 0,
        totalBooks: 0,
        weeklyBooks: 0,
        totalReports: 0,
        totalAdverts: 0,
        isLoading: false
    }
    loadData = async () => {
        this.setState({ isLoading: true });
        try {
            const totalUsers = await api.get("/users", { cancelToken: this.signal.token });
            const totalBooks = await api.get("/books", { cancelToken: this.signal.token });
            const weeklyBooks = await api.get("/books/week", { cancelToken: this.signal.token });
            const totalReports = await api.get("/reports", { cancelToken: this.signal.token });
            const totalAdverts = await api.get("/books/validate", { cancelToken: this.signal.token });
            if (totalUsers || totalBooks || weeklyBooks || totalReports || totalAdverts) {
                return this.setState({
                    totalUsers: totalUsers.data.total,
                    totalBooks: totalBooks.data.total,
                    weeklyBooks: weeklyBooks.data.count,
                    totalReports: totalReports.data.total,
                    totalAdverts: totalAdverts.data.total
                });
            }
        }
        catch (err) {
            console.log(err);
        }
    }
    componentWillUnmount() {
        this.signal.cancel('Api is being canceled');
    }
    render() {
        return (
            <Wrapper>
                <h2>Página Inicial</h2>
            </Wrapper>
        );
    }
}
