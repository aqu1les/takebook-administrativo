import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import store from './redux/store';
import PopupProvider from './components/Popup';

ReactDOM.render(
    <Provider store={store}>
        <PopupProvider>
            <App />
        </PopupProvider>
    </Provider>,
    document.getElementById('root')
);
