import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { checkAuth } from '../../validations';
import './styles.css';

export default class Dashboard extends Component {
    async componentDidMount() {
        const checked = await checkAuth();
        if (!checked) return this.setState({ toLogin: true });
    }
    state = {
        toLogin: false
    }
    handleLogout = e => {
        localStorage.removeItem('authKey');
        return this.props.history.push('/auth');
    }

    render() {
        return this.state.toLogin ? <Redirect to="/auth" /> :
            <>
                <button type="button" onClick={this.handleLogout}>Logout</button>
            </>
    }
}
