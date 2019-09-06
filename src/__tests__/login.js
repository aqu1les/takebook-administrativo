import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils, { act } from 'react-dom/test-utils';
import Login from '../pages/Login';
//import jwt from 'jsonwebtoken';

let container;
beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    act(() => {
        ReactDOM.render(<Login />, container);
    });
});
afterEach(() => {
    document.body.removeChild(container);
    container = null;
});

it('Auth should be empty on render', () => {
    expect(localStorage.getItem('authKey')).toBe(null);
});

it('Should submit form', async () => {
    const emailInput = container.querySelector('input[name=email]');
    const form = container.querySelector('form');
    //const passwordInput = document.querySelector('input[name=password]');
    await ReactTestUtils.Simulate.change(emailInput, { target: { name: 'email', value: 'felipebarros.dev@gmail.com' } });

    await ReactTestUtils.Simulate.submit(form);
    const authKey = localStorage.getItem('authKey');
    expect(authKey).toBe(true);
});