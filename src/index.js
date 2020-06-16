import React from 'react';
import ReactDOM from 'react-dom';

import App from './containers/App';

import { Provider } from 'react-redux';
import storeCreator from './store';
const store = storeCreator()



ReactDOM.render(
        <Provider store={store}>
                <App />
        </Provider>
        , document.getElementById('root'));

