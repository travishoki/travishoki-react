import React from 'react';
import { createRoot } from 'react-dom/client';

import { AppRoutes } from './AppRoutes';

import './styles/styles.scss';

const element = document.getElementById('app');

if (element) {
	const root = createRoot(element);

	root.render(<AppRoutes />);
}
