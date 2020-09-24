/*eslint-disable import/default*/
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import routes from './routes';
import configureStore from './store/configureStore';
import './styles/styles.less';

const store = configureStore();

render(
    <Provider store={store}>
		{routes}
    </Provider>,
    document.getElementById('app')
);
