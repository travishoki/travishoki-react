/*eslint-disable import/default*/
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import routes from './routes';
import '../node_modules/font-awesome/less/font-awesome.less';
import '../node_modules/bootstrap/less/bootstrap.less';
import '../node_modules/toastr/toastr.less';
import './styles/styles.less';

const store = configureStore();

render(
    <Provider store={store}>
		{routes}
    </Provider>,
    document.getElementById('app')
);
