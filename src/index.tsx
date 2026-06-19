import React from 'react';

import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';

import { AppRoutes } from './AppRoutes';

import './styles/styles.scss';

const element = document.getElementById('app');

if (element) {
	const root = createRoot(element);

	root.render(
		<HelmetProvider>
			<AppRoutes />
		</HelmetProvider>,
	);
}
