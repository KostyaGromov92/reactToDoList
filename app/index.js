import React from 'react';
import ReactDOM from 'react-dom';
import MainTemplate from './components/mainTemplate/MainTemplate';
import { Provider } from 'react-redux'
import configureStore from './store';
import Particles from 'react-particles-js';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
      <MainTemplate />
    </Provider>,
    document.getElementById('container')
);