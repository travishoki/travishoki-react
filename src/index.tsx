/*eslint-disable import/default*/
// import React from 'react';
import { render } from 'react-dom';
// import { Provider } from 'react-redux';

import routes from './routes';
// import configureStore from './store/configureStore.dev';
import './styles/styles.scss';

// const store = configureStore();

// render(
// 	<Provider store={store}>{routes}</Provider>,
// 	document.getElementById('app'),
// );

render(routes, document.getElementById('app'));
